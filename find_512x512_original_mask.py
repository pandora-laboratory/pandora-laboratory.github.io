#!/usr/bin/env python3
"""Find images where both original and mask are exactly 512×512."""

from pathlib import Path
from PIL import Image
from collections import defaultdict


def get_image_dimension(file_path: Path) -> tuple[int, int] | None:
    """Get image dimensions or None if file doesn't exist."""
    if not file_path.exists():
        return None
    try:
        with Image.open(file_path) as img:
            return img.size  # (width, height)
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return None


def check_dataset_type(base_dir: Path, dataset_type: str) -> dict:
    """Check which files have 512×512 original and mask dimensions."""

    images_dir = base_dir / "Dataset" / f"Dataset_{dataset_type}" / "Images"
    masks_dir = base_dir / "Dataset" / f"Dataset_{dataset_type}" / "Masks"
    results_dir = base_dir / "PANDORA" / f"Dataset_{dataset_type}"

    print(f"\n{'=' * 80}")
    print(f"DATASET TYPE: {dataset_type.upper()}")
    print(f"{'=' * 80}\n")

    # Get all image files (jpg)
    if not images_dir.exists():
        print(f"❌ Images directory not found: {images_dir}")
        return {}

    image_files = sorted(images_dir.glob("*.jpg"), key=lambda x: x.name)

    if not image_files:
        print(f"❌ No images found in {images_dir}")
        return {}

    print(f"Found {len(image_files)} images to check\n")

    perfect_512_matches = []
    other_matches = []
    no_matches = []

    for img_file in image_files:
        filename_base = img_file.stem  # e.g., "1" from "1.jpg"

        # Check corresponding mask (png) and result (png)
        mask_file = masks_dir / f"{filename_base}.png"
        result_file = results_dir / f"{filename_base}.png"

        img_dim = get_image_dimension(img_file)
        mask_dim = get_image_dimension(mask_file)
        result_dim = get_image_dimension(result_file)

        # Skip if any file doesn't exist
        if any(dim is None for dim in [img_dim, mask_dim]):
            missing = []
            if img_dim is None:
                missing.append("image")
            if mask_dim is None:
                missing.append("mask")

            no_matches.append({
                'name': filename_base,
                'issue': f"Missing: {', '.join(missing)}",
                'img_dim': img_dim,
                'mask_dim': mask_dim,
                'result_dim': result_dim
            })
            continue

        # Check if both original and mask are 512×512
        if img_dim == mask_dim == (512, 512):
            perfect_512_matches.append({
                'name': filename_base,
                'img_dim': img_dim,
                'mask_dim': mask_dim,
                'result_dim': result_dim
            })
        elif img_dim == mask_dim:
            other_matches.append({
                'name': filename_base,
                'img_dim': img_dim,
                'mask_dim': mask_dim,
                'result_dim': result_dim
            })
        else:
            no_matches.append({
                'name': filename_base,
                'img_dim': img_dim,
                'mask_dim': mask_dim,
                'result_dim': result_dim
            })

    # Print results
    print(f"🎯 PERFECT 512×512 ORIGINAL-MASK MATCHES ({len(perfect_512_matches)} files):")
    print("-" * 80)
    if perfect_512_matches:
        names = [item['name'] for item in perfect_512_matches]
        sorted_names = sorted(names, key=lambda x: int(x) if x.isdigit() else float('inf'))
        print(f"  Files: {', '.join(sorted_names)}")
        print(f"\n  All these files have:")
        print(f"    - Original: 512 × 512")
        print(f"    - Mask:     512 × 512")
        print(f"    - Result:   512 × 512 (standard PANDORA output)")
    else:
        print("  None")

    print(f"\n⚠️  OTHER ORIGINAL-MASK MATCHES ({len(other_matches)} files):")
    print("-" * 80)
    if other_matches:
        # Group by dimension
        by_dimension = defaultdict(list)
        for item in other_matches:
            by_dimension[item['img_dim']].append(item['name'])

        for dim, names in sorted(by_dimension.items()):
            print(f"  Dimension {dim[0]} × {dim[1]} ({len(names)} files):")
            sorted_names = sorted(names, key=lambda x: int(x) if x.isdigit() else float('inf'))
            print(f"    {', '.join(sorted_names[:20])}")  # Show first 20
            if len(sorted_names) > 20:
                print(f"    ... and {len(sorted_names) - 20} more")
    else:
        print("  None")

    print(f"\n❌ NO ORIGINAL-MASK MATCHES ({len(no_matches)} files):")
    print("-" * 80)
    if no_matches:
        for item in no_matches[:10]:  # Show first 10
            if 'issue' in item:
                print(f"  {item['name']:>3}: {item['issue']}")
            else:
                print(f"  {item['name']:>3}: Original={item['img_dim']}, Mask={item['mask_dim']}")
        if len(no_matches) > 10:
            print(f"  ... and {len(no_matches) - 10} more")
    else:
        print("  None")

    return {
        'perfect_512_matches': perfect_512_matches,
        'other_matches': other_matches,
        'no_matches': no_matches
    }


def main():
    """Main function to check all dataset types."""
    base_dir = Path("/Users/vanloc1808/Downloads/Results_Object_Removal")

    if not base_dir.exists():
        print(f"❌ Base directory not found: {base_dir}")
        return

    results = {}
    for dataset_type in ["type1", "type2", "type3"]:
        results[dataset_type] = check_dataset_type(base_dir, dataset_type)

    # Summary
    print(f"\n\n{'=' * 80}")
    print("OVERALL SUMMARY - 512×512 ORIGINAL-MASK MATCHES")
    print(f"{'=' * 80}\n")

    all_512_matches = []

    for dataset_type in ["type1", "type2", "type3"]:
        data = results[dataset_type]
        if data:
            total = len(data['perfect_512_matches']) + len(data['other_matches']) + len(data['no_matches'])
            print(f"{dataset_type.upper()}:")
            print(f"  Total files: {total}")
            print(f"  🎯 512×512 matches: {len(data['perfect_512_matches'])} ({len(data['perfect_512_matches'])/total*100:.1f}%)")
            print(f"  ⚠️  Other matches: {len(data['other_matches'])} ({len(data['other_matches'])/total*100:.1f}%)")
            print(f"  ❌ No matches: {len(data['no_matches'])} ({len(data['no_matches'])/total*100:.1f}%)")

            if data['perfect_512_matches']:
                names = [item['name'] for item in data['perfect_512_matches']]
                all_512_matches.extend([(dataset_type, name) for name in names])
                sorted_names = sorted(names, key=lambda x: int(x) if x.isdigit() else float('inf'))
                print(f"  512×512 files: {', '.join(sorted_names)}")
            print()

    # All 512×512 matching files across all types
    print(f"\n{'=' * 80}")
    print(f"PERFECT 512×512 MATCHES - ORIGINAL = MASK = 512×512")
    print(f"{'=' * 80}\n")

    if all_512_matches:
        by_type = defaultdict(list)
        for dtype, name in all_512_matches:
            by_type[dtype].append(name)

        total_512_matches = sum(len(v) for v in by_type.values())
        print(f"Total: {total_512_matches} files\n")

        for dtype in ["type1", "type2", "type3"]:
            if dtype in by_type:
                names = by_type[dtype]
                print(f"{dtype.upper()} ({len(names)} files):")
                sorted_names = sorted(names, key=lambda x: int(x) if x.isdigit() else float('inf'))
                for name in sorted_names:
                    print(f"  {name}")
    else:
        print("❌ No files found with 512×512 original-mask matches!")


if __name__ == "__main__":
    main()

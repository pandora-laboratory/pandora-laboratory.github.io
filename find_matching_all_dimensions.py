#!/usr/bin/env python3
"""Find images where original, mask, and result all have matching dimensions."""

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
    """Check which files have matching dimensions across original, mask, and result."""

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

    all_matching = []
    partial_matching = []
    no_matching = []

    for img_file in image_files:
        filename_base = img_file.stem  # e.g., "1" from "1.jpg"

        # Check corresponding mask (png) and result (png)
        mask_file = masks_dir / f"{filename_base}.png"
        result_file = results_dir / f"{filename_base}.png"

        img_dim = get_image_dimension(img_file)
        mask_dim = get_image_dimension(mask_file)
        result_dim = get_image_dimension(result_file)

        # Skip if any file doesn't exist
        if any(dim is None for dim in [img_dim, mask_dim, result_dim]):
            missing = []
            if img_dim is None:
                missing.append("image")
            if mask_dim is None:
                missing.append("mask")
            if result_dim is None:
                missing.append("result")

            no_matching.append({
                'name': filename_base,
                'issue': f"Missing: {', '.join(missing)}",
                'img_dim': img_dim,
                'mask_dim': mask_dim,
                'result_dim': result_dim
            })
            continue

        # Check if all dimensions match
        if img_dim == mask_dim == result_dim:
            all_matching.append({
                'name': filename_base,
                'dimensions': img_dim
            })
        elif img_dim == mask_dim:
            partial_matching.append({
                'name': filename_base,
                'img_dim': img_dim,
                'mask_dim': mask_dim,
                'result_dim': result_dim,
                'type': 'original-mask match'
            })
        else:
            no_matching.append({
                'name': filename_base,
                'img_dim': img_dim,
                'mask_dim': mask_dim,
                'result_dim': result_dim,
                'type': 'all different'
            })

    # Print results
    print(f"✅ ALL THREE MATCHING ({len(all_matching)} files):")
    print("-" * 80)
    if all_matching:
        # Group by dimension
        by_dimension = defaultdict(list)
        for item in all_matching:
            by_dimension[item['dimensions']].append(item['name'])

        for dim, names in sorted(by_dimension.items()):
            print(f"\n  Dimension {dim[0]} × {dim[1]} ({len(names)} files):")
            sorted_names = sorted(names, key=lambda x: int(x) if x.isdigit() else float('inf'))
            print(f"    {', '.join(sorted_names)}")
    else:
        print("  None")

    print(f"\n⚠️  PARTIAL MATCHING - Original & Mask only ({len(partial_matching)} files):")
    print("-" * 80)
    if partial_matching:
        for item in partial_matching[:10]:  # Show first 10
            print(f"  {item['name']:>3}: Image={item['img_dim']}, Mask={item['mask_dim']}, Result={item['result_dim']}")
        if len(partial_matching) > 10:
            print(f"  ... and {len(partial_matching) - 10} more")
    else:
        print("  None")

    print(f"\n❌ NO MATCHING ({len(no_matching)} files):")
    print("-" * 80)
    if no_matching:
        for item in no_matching[:10]:  # Show first 10
            if 'issue' in item:
                print(f"  {item['name']:>3}: {item['issue']}")
            else:
                print(f"  {item['name']:>3}: Image={item['img_dim']}, Mask={item['mask_dim']}, Result={item['result_dim']}")
        if len(no_matching) > 10:
            print(f"  ... and {len(no_matching) - 10} more")
    else:
        print("  None")

    return {
        'all_matching': all_matching,
        'partial_matching': partial_matching,
        'no_matching': no_matching
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
    print("OVERALL SUMMARY - ALL THREE DIMENSIONS MATCHING")
    print(f"{'=' * 80}\n")

    all_matching_files = []

    for dataset_type in ["type1", "type2", "type3"]:
        data = results[dataset_type]
        if data:
            total = len(data['all_matching']) + len(data['partial_matching']) + len(data['no_matching'])
            print(f"{dataset_type.upper()}:")
            print(f"  Total files: {total}")
            print(f"  ✅ All match: {len(data['all_matching'])} ({len(data['all_matching'])/total*100:.1f}%)")
            print(f"  ⚠️  Partial: {len(data['partial_matching'])} ({len(data['partial_matching'])/total*100:.1f}%)")
            print(f"  ❌ No match: {len(data['no_matching'])} ({len(data['no_matching'])/total*100:.1f}%)")

            if data['all_matching']:
                names = [item['name'] for item in data['all_matching']]
                all_matching_files.extend([(dataset_type, name, item['dimensions'])
                                         for name, item in zip(names, data['all_matching'])])
                sorted_names = sorted(names, key=lambda x: int(x) if x.isdigit() else float('inf'))
                print(f"  Files: {', '.join(sorted_names)}")
            print()

    # All matching files across all types
    print(f"\n{'=' * 80}")
    print(f"PERFECT MATCHES - ALL THREE DIMENSIONS IDENTICAL")
    print(f"{'=' * 80}\n")

    if all_matching_files:
        by_type = defaultdict(list)
        for dtype, name, dims in all_matching_files:
            by_type[dtype].append((name, dims))

        total_matching = sum(len(v) for v in by_type.values())
        print(f"Total: {total_matching} files\n")

        for dtype in ["type1", "type2", "type3"]:
            if dtype in by_type:
                items = by_type[dtype]
                print(f"{dtype.upper()} ({len(items)} files):")
                sorted_items = sorted(items, key=lambda x: int(x[0]) if x[0].isdigit() else float('inf'))
                for name, dims in sorted_items:
                    print(f"  {name:>3}: {dims[0]} × {dims[1]}")
    else:
        print("❌ No files found with all three dimensions matching!")


if __name__ == "__main__":
    main()

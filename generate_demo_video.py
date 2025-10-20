#!/usr/bin/env python3
"""
Script to generate a demo video from original and result images.
Creates a side-by-side comparison video showing the transformation.
"""

import cv2
import numpy as np
import os
import glob
import subprocess
from pathlib import Path

def create_comparison_video():
    """Generate a demo video showing before/after comparisons."""

    # Paths
    results_dir = Path("public/results")
    output_dir = Path("public")
    output_video = output_dir / "demo_video.mp4"

    # Get all image pairs
    original_images = sorted(glob.glob(str(results_dir / "img_*_original.png")))
    result_images = sorted(glob.glob(str(results_dir / "img_*_result.png")))

    if not original_images or not result_images:
        print("No images found in results directory")
        return

    print(f"Found {len(original_images)} image pairs")

    # Load first image to get dimensions
    first_img = cv2.imread(original_images[0])
    if first_img is None:
        print("Error loading first image")
        return

    height, width = first_img.shape[:2]

    # Video settings
    fps = 2  # 2 seconds per image pair
    duration_per_pair = 3  # 3 seconds per pair
    total_frames = len(original_images) * duration_per_pair * fps

    # Create video writer
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    video_writer = cv2.VideoWriter(
        str(output_video),
        fourcc,
        fps,
        (width * 2, height)  # Side by side
    )

    if not video_writer.isOpened():
        print("Error creating video writer")
        return

    print(f"Creating video with {total_frames} frames...")

    for i, (orig_path, result_path) in enumerate(zip(original_images, result_images)):
        print(f"Processing pair {i+1}/{len(original_images)}: {Path(orig_path).name}")

        # Load images
        orig_img = cv2.imread(orig_path)
        result_img = cv2.imread(result_path)

        if orig_img is None or result_img is None:
            print(f"Error loading images: {orig_path}, {result_path}")
            continue

        # Resize images to match if needed
        if orig_img.shape != result_img.shape:
            result_img = cv2.resize(result_img, (orig_img.shape[1], orig_img.shape[0]))

        # Create side-by-side comparison
        comparison = np.hstack([orig_img, result_img])

        # Add text labels
        font = cv2.FONT_HERSHEY_SIMPLEX
        font_scale = 1.0
        thickness = 2
        color = (255, 255, 255)  # White text

        # Add "Original" label
        cv2.putText(comparison, "Original", (10, 30), font, font_scale, color, thickness)

        # Add "Result" label
        cv2.putText(comparison, "Result", (width + 10, 30), font, font_scale, color, thickness)

        # Add frame counter
        cv2.putText(comparison, f"Image {i+1}/{len(original_images)}",
                   (10, height - 20), font, 0.7, color, thickness)

        # Write frames for the duration
        for _ in range(duration_per_pair * fps):
            video_writer.write(comparison)

    # Release video writer
    video_writer.release()

    if os.path.exists(output_video):
        print(f"✅ Demo video created successfully: {output_video}")
        print(f"Video contains {len(original_images)} image pairs")
        print(f"Duration: {len(original_images) * duration_per_pair} seconds")

        # Convert to web-compatible H.264 format using ffmpeg
        print("Converting to web-compatible format...")
        temp_video = output_dir / "demo_video_temp.mp4"
        try:
            subprocess.run([
                'ffmpeg', '-i', str(output_video),
                '-vcodec', 'libx264',
                '-pix_fmt', 'yuv420p',
                '-movflags', '+faststart',
                str(temp_video), '-y'
            ], check=True, capture_output=True)

            # Replace original with web-compatible version
            os.replace(temp_video, output_video)
            print("✅ Video converted to web-compatible H.264 format")
        except subprocess.CalledProcessError as e:
            print(f"⚠️ Warning: Could not convert to H.264. Video may not play in browsers.")
            print(f"Error: {e.stderr.decode() if e.stderr else 'Unknown error'}")
        except FileNotFoundError:
            print("⚠️ Warning: ffmpeg not found. Video may not play in browsers.")
            print("Install ffmpeg for web-compatible videos: brew install ffmpeg")
    else:
        print("❌ Failed to create video")

def create_slideshow_video():
    """Generate a slideshow video with smooth transitions."""

    # Paths
    results_dir = Path("public/results")
    output_dir = Path("public")
    output_video = output_dir / "demo_slideshow.mp4"

    # Get all image pairs
    original_images = sorted(glob.glob(str(results_dir / "img_*_original.png")))
    result_images = sorted(glob.glob(str(results_dir / "img_*_result.png")))

    if not original_images or not result_images:
        print("No images found in results directory")
        return

    print(f"Creating slideshow with {len(original_images)} image pairs")

    # Load first image to get dimensions
    first_img = cv2.imread(original_images[0])
    if first_img is None:
        print("Error loading first image")
        return

    height, width = first_img.shape[:2]

    # Video settings
    fps = 30
    display_duration = 3  # seconds per image
    transition_duration = 0.5  # seconds for transition
    frames_per_image = int(display_duration * fps)
    transition_frames = int(transition_duration * fps)

    # Create video writer
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    video_writer = cv2.VideoWriter(
        str(output_video),
        fourcc,
        fps,
        (width * 2, height)
    )

    if not video_writer.isOpened():
        print("Error creating video writer")
        return

    for i, (orig_path, result_path) in enumerate(zip(original_images, result_images)):
        print(f"Processing pair {i+1}/{len(original_images)}: {Path(orig_path).name}")

        # Load images
        orig_img = cv2.imread(orig_path)
        result_img = cv2.imread(result_path)

        if orig_img is None or result_img is None:
            continue

        # Resize if needed
        if orig_img.shape != result_img.shape:
            result_img = cv2.resize(result_img, (orig_img.shape[1], orig_img.shape[0]))

        # Create side-by-side comparison
        comparison = np.hstack([orig_img, result_img])

        # Add labels
        font = cv2.FONT_HERSHEY_SIMPLEX
        cv2.putText(comparison, "Original", (10, 30), font, 1.0, (255, 255, 255), 2)
        cv2.putText(comparison, "Result", (width + 10, 30), font, 1.0, (255, 255, 255), 2)
        cv2.putText(comparison, f"PANDORA Demo - Image {i+1}/{len(original_images)}",
                   (10, height - 20), font, 0.7, (255, 255, 255), 2)

        # Write frames
        for frame in range(frames_per_image):
            # Add fade effect at the end
            if frame >= frames_per_image - transition_frames:
                alpha = 1.0 - (frame - (frames_per_image - transition_frames)) / transition_frames
                comparison = (comparison * alpha).astype(np.uint8)

            video_writer.write(comparison)

    video_writer.release()

    if os.path.exists(output_video):
        print(f"✅ Slideshow video created: {output_video}")

        # Convert to web-compatible H.264 format using ffmpeg
        print("Converting slideshow to web-compatible format...")
        temp_video = output_dir / "demo_slideshow_temp.mp4"
        try:
            subprocess.run([
                'ffmpeg', '-i', str(output_video),
                '-vcodec', 'libx264',
                '-pix_fmt', 'yuv420p',
                '-movflags', '+faststart',
                str(temp_video), '-y'
            ], check=True, capture_output=True)

            # Replace original with web-compatible version
            os.replace(temp_video, output_video)
            print("✅ Slideshow converted to web-compatible H.264 format")
        except subprocess.CalledProcessError as e:
            print(f"⚠️ Warning: Could not convert slideshow to H.264.")
            print(f"Error: {e.stderr.decode() if e.stderr else 'Unknown error'}")
        except FileNotFoundError:
            print("⚠️ Warning: ffmpeg not found. Install with: brew install ffmpeg")
    else:
        print("❌ Failed to create slideshow video")

if __name__ == "__main__":
    print("🎬 Generating PANDORA demo videos...")
    print("\n1. Creating comparison video...")
    create_comparison_video()

    print("\n2. Creating slideshow video...")
    create_slideshow_video()

    print("\n✨ Video generation complete!")
    print("\nTo use the videos in your website:")
    print("- Replace the video source in page.tsx with '/demo_video.mp4' or '/demo_slideshow.mp4'")
    print("- Make sure the videos are in the public/ directory")

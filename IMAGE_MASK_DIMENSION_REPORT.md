# Image-Mask Dimension Analysis Report

**Date:** October 10, 2025
**Source:** `/Users/vanloc1808/Downloads/Results_Object_Removal`
**Analysis:** Original Images vs Masks (Results folder ignored)

---

## Executive Summary

This report analyzes the dimensional consistency between original images and their corresponding mask files across three dataset types (type1, type2, and type3). The PANDORA results folder was excluded from this analysis as requested.

### Overall Statistics

| Dataset   | Total Files | Matching Dimensions | Mismatched | Match Rate |
| --------- | ----------- | ------------------- | ---------- | ---------- |
| **TYPE1** | 81          | 30                  | 51         | 37.0%      |
| **TYPE2** | 17          | 17                  | 0          | 🎉 **100%** |
| **TYPE3** | 96          | 94                  | 2          | 97.9%      |
| **TOTAL** | **194**     | **141**             | **53**     | **72.7%**  |

**Key Finding:** 141 out of 194 files (72.7%) have matching image-mask dimensions, making them safe to use without resizing concerns.

---

## Detailed Analysis by Dataset Type

### TYPE1 Dataset

**Summary:** 30 out of 81 files (37.0%) have matching dimensions

#### ✅ Files with Matching Dimensions (30 files)

##### 512 × 512 (27 files)
```
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27
```

##### 612 × 612 (2 files)
```
30, 65
```

##### 640 × 640 (1 file)
```
44
```

#### ❌ Mismatched Dimensions (51 files)

Example mismatches:
- File 28: Image=640×472, Mask=875×645
- File 29: Image=640×480, Mask=1024×768
- File 31: Image=640×480, Mask=1600×1200
- File 32: Image=640×480, Mask=1280×960
- File 33: Image=427×640, Mask=1066×1600
- File 34: Image=640×427, Mask=1600×1066

*(51 files total with mismatched dimensions)*

---

### TYPE2 Dataset

**Summary:** 🎉 **PERFECT!** All 17 files (100%) have matching dimensions

#### ✅ All Files Match!

##### 640 × 480 (7 files) - Most common
```
4, 5, 8, 12, 14, 15, 16
```

##### 512 × 512 (3 files)
```
1, 2, 3
```

##### 640 × 427 (2 files)
```
7, 17
```

##### Other Dimensions (5 files)
- File 6: 427 × 640
- File 9: 640 × 426
- File 10: 640 × 640
- File 11: 480 × 640
- File 13: 639 × 426

---

### TYPE3 Dataset

**Summary:** 94 out of 96 files (97.9%) have matching dimensions

#### ✅ Files with Matching Dimensions (94 files)

##### 576 × 384 (28 files) - Most common dimension
```
10, 19, 26, 28, 29, 32, 35, 39, 41, 48, 50, 56, 59, 62, 64, 68, 69, 70, 73, 74, 78, 81, 82, 83, 87, 94, 98, 100
```

##### 408 × 384 (10 files)
```
8, 15, 16, 17, 18, 31, 60, 86, 96, 97
```

##### 512 × 384 (8 files)
```
24, 34, 47, 51, 67, 77, 84, 93
```

##### 575 × 384 (5 files)
```
27, 37, 42, 65, 71
```

##### 579 × 384 (4 files)
```
11, 22, 25, 80
```

##### 580 × 384 (3 files)
```
13, 46, 58
```

##### 683 × 384 (2 files)
```
1, 38
```

##### 577 × 384 (2 files)
```
21, 66
```

##### 531 × 384 (2 files)
```
49, 92
```

##### 384 × 384 (2 files)
```
33, 54
```

##### Other Dimensions (28 files)
Various unique dimensions including:
- File 9: 1149 × 384
- File 61: 1313 × 384
- File 63: 950 × 384
- File 76: 861 × 384
- File 20: 697 × 384
- File 72: 617 × 384
- And 22 more files with unique dimensions

#### ❌ Mismatched Dimensions (2 files)
- `img_5_original`: Missing mask file
- `img_7_original`: Missing mask file

---

## Complete List of Matching Files

### TYPE1 Matching Files (30 total)

| File | Dimensions |
| ---- | ---------- |
| 1-27 | 512 × 512  |
| 30   | 612 × 612  |
| 44   | 640 × 640  |
| 65   | 612 × 612  |

### TYPE2 Matching Files (17 total)

| File | Dimensions |
| ---- | ---------- |
| 1    | 512 × 512  |
| 2    | 512 × 512  |
| 3    | 512 × 512  |
| 4    | 640 × 480  |
| 5    | 640 × 480  |
| 6    | 427 × 640  |
| 7    | 640 × 427  |
| 8    | 640 × 480  |
| 9    | 640 × 426  |
| 10   | 640 × 640  |
| 11   | 480 × 640  |
| 12   | 640 × 480  |
| 13   | 639 × 426  |
| 14   | 640 × 480  |
| 15   | 640 × 480  |
| 16   | 640 × 480  |
| 17   | 640 × 427  |

### TYPE3 Matching Files (94 total)

| File | Dimensions | File | Dimensions | File | Dimensions |
| ---- | ---------- | ---- | ---------- | ---- | ---------- |
| 1    | 683 × 384  | 34   | 512 × 384  | 67   | 512 × 384  |
| 8    | 408 × 384  | 35   | 576 × 384  | 68   | 576 × 384  |
| 9    | 1149 × 384 | 36   | 410 × 384  | 69   | 576 × 384  |
| 10   | 576 × 384  | 37   | 575 × 384  | 70   | 576 × 384  |
| 11   | 579 × 384  | 38   | 683 × 384  | 71   | 575 × 384  |
| 12   | 586 × 384  | 39   | 576 × 384  | 72   | 617 × 384  |
| 13   | 580 × 384  | 40   | 480 × 384  | 73   | 576 × 384  |
| 14   | 560 × 384  | 41   | 576 × 384  | 74   | 576 × 384  |
| 15   | 408 × 384  | 42   | 575 × 384  | 75   | 556 × 384  |
| 16   | 408 × 384  | 43   | 669 × 384  | 76   | 861 × 384  |
| 17   | 408 × 384  | 44   | 477 × 384  | 77   | 512 × 384  |
| 18   | 408 × 384  | 45   | 511 × 384  | 78   | 576 × 384  |
| 19   | 576 × 384  | 46   | 580 × 384  | 79   | 568 × 384  |
| 20   | 697 × 384  | 47   | 512 × 384  | 80   | 579 × 384  |
| 21   | 577 × 384  | 48   | 576 × 384  | 81   | 576 × 384  |
| 22   | 579 × 384  | 49   | 531 × 384  | 82   | 576 × 384  |
| 23   | 641 × 384  | 50   | 576 × 384  | 83   | 576 × 384  |
| 24   | 512 × 384  | 51   | 512 × 384  | 84   | 512 × 384  |
| 25   | 579 × 384  | 52   | 630 × 384  | 85   | 509 × 384  |
| 26   | 576 × 384  | 53   | 461 × 384  | 86   | 408 × 384  |
| 27   | 575 × 384  | 54   | 384 × 384  | 87   | 576 × 384  |
| 28   | 576 × 384  | 55   | 571 × 384  | 88   | 485 × 384  |
| 29   | 576 × 384  | 56   | 576 × 384  | 89   | 536 × 384  |
| 30   | 574 × 384  | 57   | 459 × 384  | 90   | 640 × 384  |
| 31   | 408 × 384  | 58   | 580 × 384  | 91   | 505 × 384  |
| 32   | 576 × 384  | 59   | 576 × 384  | 92   | 531 × 384  |
| 33   | 384 × 384  | 60   | 408 × 384  | 93   | 512 × 384  |
| -    | -          | 61   | 1313 × 384 | 94   | 576 × 384  |
| -    | -          | 62   | 576 × 384  | 96   | 408 × 384  |
| -    | -          | 63   | 950 × 384  | 97   | 408 × 384  |
| -    | -          | 64   | 576 × 384  | 98   | 576 × 384  |
| -    | -          | 65   | 575 × 384  | 99   | 396 × 384  |
| -    | -          | 66   | 577 × 384  | 100  | 576 × 384  |
| -    | -          | -    | -          | 101  | 543 × 384  |

---

## Recommendations

### ✅ Safe to Use (141 files)

These files have matching image-mask dimensions and can be used directly without any resizing:

1. **TYPE2:** All 17 files are safe
2. **TYPE3:** 94 files are safe (excluding img_5_original and img_7_original)
3. **TYPE1:** 30 files are safe (files 1-27, 30, 44, 65)

### ⚠️ Requires Attention (53 files)

These files have mismatched dimensions between image and mask:

1. **TYPE1:** 51 files need dimension correction
2. **TYPE3:** 2 files missing masks (img_5_original, img_7_original)

### 💡 For Website Implementation

When using these images on the website:
- Use native `<img>` tags without resizing (as recently updated)
- Only select files from the "matching" list above
- This ensures masks will overlay correctly on the original images
- Avoid using `object-cover` or `object-contain` CSS that changes aspect ratios

---

## Technical Details

### Analysis Method
- **Tool:** Python script using PIL (Pillow) library
- **Script Location:** `check_image_mask_dimensions.py`
- **Comparison:** Direct pixel dimension comparison (width × height)
- **File Format:** Images (.jpg) vs Masks (.png)

### File Structure Analyzed
```
/Users/vanloc1808/Downloads/Results_Object_Removal/
├── Dataset/
│   ├── Dataset_type1/
│   │   ├── Images/*.jpg
│   │   └── Masks/*.png
│   ├── Dataset_type2/
│   │   ├── Images/*.jpg
│   │   └── Masks/*.png
│   └── Dataset_type3/
│       ├── Images/*.jpg
│       └── Masks/*.png
└── PANDORA/ (excluded from analysis)
```

---

## Conclusion

The analysis reveals that **72.7% of files** have matching dimensions between original images and masks, making them immediately usable for the website. TYPE2 demonstrates perfect dimensional consistency, while TYPE3 is nearly perfect. TYPE1 requires the most attention with 51 files needing dimension correction.

For immediate website deployment, focus on:
- All 17 files from TYPE2
- 94 files from TYPE3 (excluding the 2 with missing masks)
- 30 files from TYPE1 (files 1-27, 30, 44, 65)

This provides **141 high-quality image-mask pairs** ready for use without any preprocessing.



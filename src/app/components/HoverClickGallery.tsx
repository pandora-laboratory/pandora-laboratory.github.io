"use client";

import { useState } from "react";

type GalleryItem = {
    id: string;
    originalSrc: string;
    resultSrc: string;
    maskSrc: string;
};

type HoverClickGalleryProps = {
    items: GalleryItem[];
    className?: string;
};

function GalleryItemComponent({ item, isClicked, isHovered, onHover, onClick }: {
    item: GalleryItem;
    isClicked: boolean;
    isHovered: boolean;
    onHover: (hover: boolean) => void;
    onClick: () => void;
}) {
    return (
        <div
            className="relative rounded-lg overflow-hidden cursor-pointer bg-gray-100 shadow-md hover:shadow-xl transition-shadow inline-block"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            onClick={onClick}
        >
            {/* Base image (original or result based on click state) */}
            <img
                src={isClicked ? item.resultSrc : item.originalSrc}
                alt=""
                className="block select-none"
            />

            {/* Hover overlay - cyan only on masked (white) areas */}
            {isHovered && !isClicked && (
                <svg className="absolute inset-0 pointer-events-none" style={{ width: "100%", height: "100%" }}>
                    <defs>
                        <mask id={`mask-${item.id}`} maskUnits="userSpaceOnUse">
                            <image
                                href={item.maskSrc}
                                x="0"
                                y="0"
                                width="100%"
                                height="100%"
                                preserveAspectRatio="none"
                            />
                        </mask>
                    </defs>
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="rgba(34, 211, 238, 0.6)"
                        mask={`url(#mask-${item.id})`}
                    />
                </svg>
            )}

            {/* Hover hint */}
            {isHovered && !isClicked && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/80 text-white text-sm font-medium whitespace-nowrap">
                    Click to see result
                </div>
            )}
        </div>
    );
}

export default function HoverClickGallery({ items, className }: HoverClickGalleryProps) {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [clickedIds, setClickedIds] = useState<Set<string>>(new Set());

    const handleClick = (id: string) => {
        setClickedIds((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const handleHover = (id: string | null) => {
        setHoveredId(id);
        // Reset click state when mouse leaves
        if (id === null) {
            setClickedIds(new Set());
        }
    };

    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${className ?? ""}`}>
            {items.map((item) => (
                <GalleryItemComponent
                    key={item.id}
                    item={item}
                    isClicked={clickedIds.has(item.id)}
                    isHovered={hoveredId === item.id}
                    onHover={(hover) => handleHover(hover ? item.id : null)}
                    onClick={() => handleClick(item.id)}
                />
            ))}
        </div>
    );
}

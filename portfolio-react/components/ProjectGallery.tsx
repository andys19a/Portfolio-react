"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  title: string;
  images: string[];
};

export default function ProjectGallery({ title, images }: Props) {
  const [active, setActive] = useState(0);
  if (!images?.length) return null;

  return (
    <section className="gallery">
      <div className="gallery-layout">
        <div className="gallery-main">
          <Image
            src={images[active]}
            alt={`${title} – bild ${active + 1}`}
            fill
            priority
            unoptimized
            quality={95}
            // ungefärlig bredd på huvudbilden i din 900px-container
            sizes="(max-width: 700px) 100vw, 728px"
            style={{ objectFit: "contain" }}
          />
        </div>

        {images.length > 1 && (
          <div className="gallery-thumbs-vertical" aria-label="Thumbnails">
            {images.map((src, idx) => (
              <button
                key={`${src}-${idx}`}
                type="button"
                className={`thumb ${idx === active ? "active" : ""}`}
                onClick={() => setActive(idx)}
                aria-label={`Visa bild ${idx + 1}`}
              >
                <Image
                src={src}
                alt={`${title} – thumbnail ${idx + 1}`}
                fill
                unoptimized
                sizes="(max-width: 700px) 120px, 160px"
                style={{ objectFit: "cover" }}
                />

              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

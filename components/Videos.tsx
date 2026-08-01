"use client";

import Image from "next/image";
import { PlayIcon } from "./icons";
import { useI18n } from "@/lib/i18n";

const videos = [
  {
    key: "v1" as const,
    href: "https://www.tiktok.com/@hisweetiesbeauty/video/7612910512392686879",
    src: "/assets/videos/v1.jpg",
    handle: "@hisweetiesbeauty",
  },
  {
    key: "v2" as const,
    href: "https://www.tiktok.com/@hisweetiesbeauty/video/7584770811047824670",
    src: "/assets/videos/v2.jpg",
    handle: "@hisweetiesbeauty",
  },
  {
    key: "v3" as const,
    href: "https://www.tiktok.com/@hisweetiesshop/video/7601986155441147166",
    src: "/assets/videos/v3.jpg",
    handle: "@hisweetiesshop",
  },
  {
    key: "v4" as const,
    href: "https://www.tiktok.com/@hisweetiesshop/video/7605838757106847006",
    src: "/assets/videos/v4.jpg",
    handle: "@hisweetiesshop",
  },
];

export function Videos() {
  const { t } = useI18n();

  return (
    <section className="videos-section" id="videos" aria-label={t.videos}>
      <div className="videos-head">
        <h2 className="videos-title">{t.videos}</h2>
        <a
          className="videos-more"
          href="https://www.tiktok.com/@hisweetiesshop"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.videosMore}
        </a>
      </div>
      <div className="videos-grid">
        {videos.map((video) => {
          const title = t.videoTitles[video.key];
          return (
            <a
              key={video.href}
              className="video-card"
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={video.src}
                alt={title}
                fill
                sizes="50vw"
                style={{ objectFit: "cover" }}
              />
              <span className="video-play" aria-hidden="true">
                <PlayIcon size={14} />
              </span>
              <div className="video-meta">
                <strong>{title}</strong>
                <span>{video.handle}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

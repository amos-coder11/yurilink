"use client";

import Image from "next/image";
import { CardCaption } from "./CardCaption";
import { LinkIcon } from "./icons";
import { useI18n } from "@/lib/i18n";

const COURSE_URL = "https://yurychacon.com/";

export function Marketing() {
  const { t } = useI18n();

  return (
    <section className="amazon-section" id="cursos" aria-label={t.courses}>
      <div className="videos-head">
        <h2 className="videos-title">
          <span className="videos-title-logo" aria-hidden="true">
            <LinkIcon size={15} />
          </span>
          {t.courses}
        </h2>
        <a
          className="videos-more"
          href={COURSE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.coursesMore}
        </a>
      </div>
      <div className="amazon-list">
        <a
          className="amazon-card featured"
          href={COURSE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="amazon-card-shell">
            <Image
              src="/assets/yurimarketing.png"
              alt={t.coursesAlt}
              fill
              sizes="(max-width: 480px) 100vw, 440px"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
            <span className="amazon-link-icon" aria-hidden="true">
              <LinkIcon size={20} />
            </span>
            <div className="amazon-scrim" aria-hidden="true" />
            <CardCaption
              icon={<LinkIcon size={26} />}
              iconClassName="link"
              title={t.coursesTitle}
            />
          </span>
        </a>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import AmazonFillIcon from "@iconify-react/ri/amazon-fill";
import { CardCaption } from "./CardCaption";
import { LinkIcon } from "./icons";
import { useI18n } from "@/lib/i18n";

const AMAZON_URL = "https://a.co/d/0edPMJv7";

export function Amazon() {
  const { t } = useI18n();

  return (
    <section className="amazon-section" id="amazon" aria-label="Amazon">
      <div className="videos-head">
        <h2 className="videos-title">
          <span className="videos-title-logo amazon" aria-hidden="true">
            <AmazonFillIcon height="1.15em" />
          </span>
          Amazon
        </h2>
        <a
          className="videos-more"
          href={AMAZON_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.amazonMore}
        </a>
      </div>
      <div className="amazon-list">
        <a
          className="amazon-card featured"
          href={AMAZON_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="amazon-card-shell">
            <Image
              src="/assets/amazon.png"
              alt={t.amazonAlt}
              fill
              priority
              sizes="(max-width: 480px) 100vw, 440px"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <span className="amazon-link-icon" aria-hidden="true">
              <LinkIcon size={20} />
            </span>
            <div className="amazon-scrim" aria-hidden="true" />
            <CardCaption
              icon={<AmazonFillIcon height="1.9em" />}
              iconClassName="amazon"
              title={t.amazonTitle}
            />
          </span>
        </a>
      </div>
    </section>
  );
}

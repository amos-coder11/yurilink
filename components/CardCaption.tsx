import Image from "next/image";
import type { ReactNode } from "react";

type CardCaptionProps = {
  icon: ReactNode;
  iconClassName?: string;
  title: string;
};

export function CardCaption({ icon, iconClassName = "", title }: CardCaptionProps) {
  return (
    <div className="amazon-title">
      <span className={`amazon-title-logo ${iconClassName}`.trim()} aria-hidden="true">
        {icon}
      </span>
      <span className="amazon-title-text">{title}</span>
      <span className="amazon-title-brand" aria-hidden="true">
        <Image
          src="/assets/yclogo.png"
          alt=""
          width={72}
          height={62}
          className="amazon-title-brand-img"
        />
      </span>
    </div>
  );
}

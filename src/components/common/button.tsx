import Link from "next/link";
import React from "react";

type ButtonProps = {
  Icon?: React.ElementType;
  title: string;
  url: string;
  target?: string;
};

export default function Button({ title, Icon, url, target = "_parent" }: ButtonProps) {
  return (
    <Link href={url} className="common-button" scroll={true} target={target}>
      {Icon && <Icon className="w-6 h-6 2xl:w-7 2xl:h-7" />}
      <span className="common-button-text">{title}</span>
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "@/../public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="relative w-48 h-14">
      <Image src={logoImage} quality={100} alt="StreamVibe" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
    </Link>
  );
}

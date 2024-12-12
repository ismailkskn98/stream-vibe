import React from "react";

export default function Description({ description }: { description: string }) {
  return (
    <article className="w-full max-w-[1085px] flex flex-col items-start gap-[14px] p-[50px] bg-black-10 border border-solid border-black-15 rounded-xl">
      <h3 className="w-full font-medium text-lg text-grey-60">Açıklama</h3>
      <p className="font-medium text-white text-base tracking-wide leading-7">{description}</p>
    </article>
  );
}

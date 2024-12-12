import React from "react";

export default function Description() {
  return (
    <article className="w-full flex flex-col items-start gap-[14px] p-[50px] bg-black-10 border border-solid border-black-15 rounded-xl">
      <h3 className="w-full font-medium text-lg text-grey-60">Açıklama</h3>
      <p className="font-medium text-white text-lg">
        Güney {`Hindistan'da`} maneviyatın, kaderin ve folklorun hüküm sürdüğü bir köyde ateşli bir genç adam, yılmaz bir orman memuruyla çatışır.
      </p>
    </article>
  );
}

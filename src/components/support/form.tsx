"use client";

import Button from "../common/button";

export default function SupportForm() {
  return (
    <section className="w-[976px] h-[740px] p-[50px] bg-black-06 border border-solid border-black-15 rounded-xl">
      <form action="" className="w-full flex flex-col items-end gap-[50px]">
        <article className="w-full flex-between gap-[50px]">
          <div className="w-full flex flex-col items-start gap-4">
            <label htmlFor="firstname" className="text-white text-lg font-semibold">
              Ad
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="w-full max-h-[67px] p-5 border border-solid border-black-15 bg-black-08 rounded-lg text-lg font-normal text-grey-60 outline-none placeholder:text-black-25"
              placeholder="Adınızı giriniz"
            />
          </div>
          <div className="w-full flex flex-col items-start gap-4">
            <label htmlFor="lastname" className="text-white text-lg font-semibold">
              Soyad
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="w-full max-h-[67px] p-5 border border-solid border-black-15 bg-black-08 rounded-lg text-lg font-normal text-grey-60 outline-none placeholder:text-black-25"
              placeholder="Soyadınızı giriniz"
            />
          </div>
        </article>
        <article className="w-full flex-between gap-[50px]">
          <div className="w-full flex flex-col items-start gap-4">
            <label htmlFor="email" className="text-white text-lg font-semibold">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full max-h-[67px] p-5 border border-solid border-black-15 bg-black-08 rounded-lg text-lg font-normal text-grey-60 outline-none placeholder:text-black-25"
              placeholder="Email adresinizi giriniz"
            />
          </div>
          <div className="w-full flex flex-col items-start gap-4">
            <label htmlFor="telephone" className="text-white text-lg font-semibold">
              Telefon Numarası
            </label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              className="w-full max-h-[67px] p-5 border border-solid border-black-15 bg-black-08 rounded-lg text-lg font-normal text-grey-60 outline-none placeholder:text-black-25"
              placeholder="Telefon numaranızı giriniz"
            />
          </div>
        </article>
        <article className="w-full flex flex-col items-start gap-4">
          <label htmlFor="message" className="text-white text-lg font-semibold">
            Mesajınız
          </label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="w-full max-h-[163px] p-5 border border-solid border-black-15 bg-black-08 rounded-lg text-lg font-normal text-grey-60 outline-none placeholder:text-black-25"
            placeholder="Mesajınızı giriniz"
          />
        </article>
        <article className="w-full flex-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="outline-none border border-solid border-black-15 appearance-none checked:appearance-auto accent-red-45 w-5 h-5 rounded-[4px]"
            />
            <label htmlFor="checkbox" className="text-grey-60 text-base font-normal">
              Kullanım Şartları ve Gizlilik {`Politikası'nı`} kabul ediyorum
            </label>
          </div>
          <Button title="Gönder" url="#" />
        </article>
      </form>
    </section>
  );
}

"use client";
import { socialLinks } from "@/components/common/footer/section";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function MobilNavigationBar() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="default" className="lg:hidden flex items-center justify-center outline-none border-none">
            <HiMenuAlt3 className="w-9 h-9 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent className="space-y-12 flex flex-col items-center justify-between">
          <SheetHeader>
            <SheetTitle className="text-3xl">StreamVibe</SheetTitle>
          </SheetHeader>
          <main className="w-full basis-3/5">
            <nav className="max-h-min w-full flex flex-col items-center justify-between gap-10 text-xl">
              <SheetTrigger asChild>
                <Link href="/" className="hover:text-red-45 transition-all">
                  Anasayfa
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link href="/filmler-ve-diziler" className="hover:text-red-45 transition-all">
                  Filmler ve Diziler
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link href="/destek" className="hover:text-red-45 transition-all">
                  Destek
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link href="/abonelikler" className="hover:text-red-45 transition-all">
                  Abonelikler
                </Link>
              </SheetTrigger>
            </nav>
          </main>
          <SheetFooter>
            <SheetClose asChild>
              <div className="text-grey-60 flex items-center gap-2 md:gap-[10px] 2xl:gap-[14px]">
                {socialLinks.map((social, socialIndex) => (
                  <Link
                    key={socialIndex}
                    href={social.href}
                    className="text-white bg-black-10 border border-solid border-black-15 rounded-lg p-3 md:p-2 2xl:p-4 hover:bg-black-08 transition-all"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

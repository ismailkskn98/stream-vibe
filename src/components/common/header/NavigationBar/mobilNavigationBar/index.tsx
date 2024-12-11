"use client";
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
            <HiMenuAlt3 className="min-w-7 min-h-7 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent className="space-y-12 flex flex-col items-center justify-between">
          <SheetHeader>
            <SheetTitle>StreamVibe</SheetTitle>
          </SheetHeader>
          <main className="w-full basis-1/2">
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
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

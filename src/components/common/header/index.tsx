import React from "react";
import Logo from "./logo";
import NavigationBar from "./NavigationBar";
import Buttons from "./buttons";
import MobilNavigationBar from "./NavigationBar/mobilNavigationBar";

export default function Header() {
  return (
    <header className="w-full fluid">
      <main className="grid-container">
        <div className="flex-between">
          <Logo />
          <NavigationBar />
          <Buttons />
          <MobilNavigationBar />
        </div>
      </main>
    </header>
  );
}

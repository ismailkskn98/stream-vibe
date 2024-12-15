import React from "react";

export default function MovieDetail({ children }: { children: React.ReactNode }) {
  return <section className="w-full flex items-center lg:items-start justify-center flex-col lg:flex-row gap-5">{children}</section>;
}

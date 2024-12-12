import React from "react";

export default function MovieDetail({ children }: { children: React.ReactNode }) {
  return <section className="flex item-start justify-between gap-5">{children}</section>;
}

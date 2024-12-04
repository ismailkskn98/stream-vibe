"use client";
import React from "react";

type ButtonProps = {
  onClick: () => void;
  icon: React.ReactNode;
  className?: string;
};

export default function Button({ onClick, icon, className }: ButtonProps) {
  return (
    <div onClick={onClick} className={className}>
      {icon}
    </div>
  );
}

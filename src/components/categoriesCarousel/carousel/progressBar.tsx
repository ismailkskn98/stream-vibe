import React from "react";

export default function ProgressBar({ progress }: { progress: number }) {
  // progress bir number (sayı) türünde ve 0 ile 1 arasında bir değer olmalıdır.
  return (
    <div className="min-w-20 flex-center">
      <div className="flex w-full h-1 bg-black-10 rounded-full overflow-hidden">
        <div className="h-full bg-red-45 transition-all duration-300 ease-out" style={{ width: `${progress * 100}%` }} />
      </div>
    </div>
  );
}

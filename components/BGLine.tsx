import React from "react";

export default function BGLine() {
  return (
    <div className="relative">
      <span className="hidden lg:block h-full w-0.5 bg-white fixed top-0 left-48 opacity-5" />
      <span className="hidden lg:block h-full w-0.5 bg-white fixed top-0 left-96 opacity-5" />
      <span className="hidden lg:block h-full w-0.5 bg-white fixed top-0 left-[36rem] opacity-5" />
      <span className="hidden lg:block h-full w-0.5 bg-white fixed top-0 left-[48rem] opacity-5" />
      <span className="hidden lg:block h-full w-0.5 bg-white fixed top-0 left-[60rem] opacity-5" />
      <span className="hidden lg:block h-full w-0.5 bg-white fixed top-0 right-[36rem] opacity-5" />
      <span className="hidden lg:block h-full w-0.5 bg-white fixed top-0 right-[48rem] opacity-5" />
      <span className="hidden lg:block h-full w-0.5 bg-white fixed top-0 right-96 opacity-5" />
      <span className="hidden lg:block h-full w-0.5 bg-white fixed top-0 right-48 opacity-5" />
    </div>
  );
}

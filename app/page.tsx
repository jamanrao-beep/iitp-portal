"use client";

import dynamic from "next/dynamic";

const MainContent = dynamic(() => import("./MainContent"), {
  ssr: false,
});

export default function Page() {
  return (
    <main>
      <MainContent />
    </main>
  );
}

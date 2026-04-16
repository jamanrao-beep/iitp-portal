import { Suspense } from "react";
import dynamic from "next/dynamic";

const MainContent = dynamic(() => import("./MainContent"), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full flex items-center justify-center bg-[#003366] text-white font-bold">
      Loading IITP Portal...
    </div>
  ),
});

export default function Page() {
  return (
    <Suspense fallback={null}>
      <MainContent />
    </Suspense>
  );
}

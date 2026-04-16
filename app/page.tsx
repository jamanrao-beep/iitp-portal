import { Suspense } from "react";
import MainContent from "./MainContent";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center bg-[#003366] text-white font-bold">
          Initializing IITP Portal...
        </div>
      }
    >
      <MainContent />
    </Suspense>
  );
}

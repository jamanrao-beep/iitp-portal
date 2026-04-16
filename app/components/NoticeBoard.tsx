// components/NoticeBoard.tsx
"use client";
import { useRouter, useSearchParams } from 'next/navigation';

const categories = ["All", "Academic", "Admissions", "R&D"];

export const NoticeBoard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('category') || 'All';

  const updateFilter = (cat: string) => {
    router.push(`?category=${cat}`, { scroll: false });
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-200">
      <h3 className="text-2xl font-bold mb-4">Latest Notices</h3>
      <div className="flex gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => updateFilter(cat)}
            className={`px-4 py-1 rounded-md text-sm ${activeTab === cat ? 'bg-blue-600 text-white' : 'bg-slate-100'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Notice items would be mapped here based on activeTab */}
    </div>
  );
};
"use client";

export default function LanguageSwitcher() {
  const setLocale = (locale: string) => {
    document.cookie = `locale=${locale}; path=/`;
    window.location.reload(); // simplu și sigur
  };

  return (
    <div className="flex items-center gap-1 border rounded-md p-1 text-xs">
      <button
        onClick={() => setLocale("en")}
        className="px-2 py-1 rounded hover:bg-muted"
      >
        EN
      </button>
      <button
        onClick={() => setLocale("ro")}
        className="px-2 py-1 rounded hover:bg-muted"
      >
        RO
      </button>
    </div>
  );
}
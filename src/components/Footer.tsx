import { profile } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {profile.name}</p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}

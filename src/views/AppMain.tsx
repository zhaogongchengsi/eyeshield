export default function AppMain({ children }: { children: React.ReactNode }) {
  return <main className="w-[var(--app-main-width)]">{children}</main>;
}
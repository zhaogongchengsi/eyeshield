import AppHeader from "~/views/AppHeader";
import AppSider from "~/views/AppSider";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-screen h-screen">
      <AppHeader />
      <section className="w-full flex h-[var(--app-content-height)] gap-[var(--app-gap)] mt-[var(--app-gap)]">
        <AppSider />
        <main className="w-[var(--app-main-width)]">{children}</main>
      </section>
    </section>
  );
}

import AppHeader from "~/views/AppHeader";
import AppMain from "~/views/AppMain";
import AppSider from "~/views/AppSider";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-screen h-screen">
      <AppHeader />
      <section className="w-full flex h-[var(--app-content-height)] gap-[var(--app-gap)]">
        <AppSider />
        <AppMain>{children}</AppMain>
      </section>
    </section>
  );
}

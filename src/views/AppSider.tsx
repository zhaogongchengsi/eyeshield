import AppSetting from "./AppSetting";
import ThemeTrigger from "~/components/ThemeTrigger";

export default function AppSider() {
  return (
    <div className="w-[var(--app-aside-width)] px-[var(--app-safe-area)] flex flex-col border-r border-zinc-200 dark:border-zinc-700">
      <div className="h-[var(--app-aside-content-height)]">con</div>
      <div className="h-[var(--app-aside-footer-height)] mt-auto flex flex-col gap-4 items-center">
        <ThemeTrigger />
        <AppSetting />
      </div>
    </div>
  );
}

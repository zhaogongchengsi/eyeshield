import AppSetting from "./AppSetting";
import ThemeTrigger from "~/components/ThemeTrigger";
import { ScrollArea } from "@radix-ui/themes";
import AppSiderLink from "./AppSiderLint";
import { HomeIcon, BellIcon } from "@radix-ui/react-icons";

export default function AppSider() {
  return (
    <div className="w-[var(--app-aside-width)] flex flex-col border-r border-zinc-200 dark:border-zinc-700">
      <div className="h-[var(--app-aside-content-height)]">
        <ScrollArea type="hover" scrollbars="vertical" style={{ height: `var(--app-aside-content-height)` }}>
          <AppSiderLink to="/">
            <HomeIcon />
          </AppSiderLink>
          <AppSiderLink to="/alarm">
            <BellIcon />
          </AppSiderLink>
        </ScrollArea>
      </div>
      <div className="h-[var(--app-aside-footer-height)] mt-auto flex flex-col gap-4 items-center">
        <ThemeTrigger />
        <AppSetting />
      </div>
    </div>
  );
}

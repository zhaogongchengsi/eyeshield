import { Popover } from "@radix-ui/themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function AppSetting() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <button className="app-button">
          <HamburgerMenuIcon />
        </button>
      </Popover.Trigger>
      <Popover.Content align="end" sideOffset={15} side="right" style={{ width: 200 }}>
        asdasd
      </Popover.Content>
    </Popover.Root>
  );
}

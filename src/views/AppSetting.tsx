import { DropdownMenu } from "@radix-ui/themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function AppSetting() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className="app-button">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" sideOffset={15} side="right" style={{ width: 200 }}>
        <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

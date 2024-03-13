import { IconButton, Popover } from "@radix-ui/themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function AppSetting() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <IconButton radius="full" className="cursor-pointer!" variant="soft">
          <HamburgerMenuIcon />
        </IconButton>
      </Popover.Trigger>
      <Popover.Content style={{ width: 200 }}>asdasd</Popover.Content>
    </Popover.Root>
  );
}

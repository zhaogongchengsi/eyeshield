import { PlusIcon } from "@radix-ui/react-icons";
import { IconButton, ScrollArea, Text, Dialog, Flex, Button } from "@radix-ui/themes";
import { List } from "@douyinfe/semi-ui";

const AsideItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <List.Item className="p-2! w-[200px]">
      <Text className="truncate w-[150px]">
        {children}
      </Text>
    </List.Item>
  );
};

const CreateFrom = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content className="max-w-100">
        <Dialog.Title>添加闹钟</Dialog.Title>
        <Flex direction="column" gap="3">
          asd
        </Flex>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              取消
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>创建</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

const AlarmAside = () => {
  const data = [
    "从明天起，做一个幸福的人",
    "喂马，劈柴，周游世界",
    "从明天起，关心粮食和蔬菜",
    "我有一所房子，面朝大海，春暖花开",
  ];
  return (
    <ScrollArea
      size="1"
      className="border-r border-zinc-200 dark:border-zinc-700"
      scrollbars="vertical"
      style={{ height: `var(--app-content-height)`, width: 200 }}
    >
      <div className="sticky top-0 left-0 p-2">
        <div className="flex justify-end">
          <CreateFrom>
            <IconButton variant="surface" size="1" className="cursor-pointer!">
              <PlusIcon width="18" height="18" />
            </IconButton>
          </CreateFrom>
        </div>
      </div>
      <List bordered size="small" dataSource={data} renderItem={(item) => <AsideItem>{item}</AsideItem>} />
    </ScrollArea>
  );
};

export default AlarmAside;

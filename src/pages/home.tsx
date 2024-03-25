import { ScrollArea } from "@radix-ui/themes";

export default function Home() {
  return (
    <div className="h-[var(--app-content-height)] flex">
      <ScrollArea
        size="1"
        className="w-100"
        scrollbars="vertical"
        style={{ height: `var(--app-content-height)`, width: 200 }}
      >
        <div className="h-10 bg-red-100 sticky top-0 left-0">123</div>
        <div className="bg-red-200">123</div>
      </ScrollArea>
      <div className="flex-1 h-full">1</div>
    </div>
  );
}
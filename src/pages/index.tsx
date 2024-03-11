import { Button, TextArea } from "@radix-ui/themes";

export default function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Button>abc</Button>
      <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
    </div>
  );
}

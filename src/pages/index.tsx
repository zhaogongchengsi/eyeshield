import { Button } from "@radix-ui/themes";
import { useTheme } from "~/hooks/theme";
import { Button as SemiButton } from "@douyinfe/semi-ui";

export default function Index() {
  const [_, setTheme] = useTheme();

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Button onClick={() => setTheme("dark")}>dark</Button>
      <SemiButton onClick={() => setTheme("light")}>light</SemiButton>
    </div>
  );
}

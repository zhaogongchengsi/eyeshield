import React from "react";
import { Input, Avatar, Switch } from "@douyinfe/semi-ui";
import { IconSearch, IconMoon, IconSun } from "@douyinfe/semi-icons";
import { useDarkModel } from "../hooks/index";

export default function Header({ user }: { user: string }) {
  const [setDark] = useDarkModel();
  return (
    <div className="flex justify-between items-center p-2 box-border h-30 text-white">
      <div className="flex items-center">
        <h3 className="mr-[20px]">Eyshield</h3>
        <Input prefix={<IconSearch />} showClear></Input>
      </div>
      <div className="flex items-center">
        <Avatar size="default" alt={user} className="mr-[10px]">
          {user}
        </Avatar>
        <div className="flex items-center">
          <IconSun />
          <Switch
          className="mx-[10px]"
            onChange={(v, e) => setDark(v)}
            aria-label="a switch for demo"
          ></Switch>
          <IconMoon />
        </div>
      </div>
    </div>
  );
}

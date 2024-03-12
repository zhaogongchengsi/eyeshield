import { cva } from "class-variance-authority";

const AppHeaderClass = cva("w-full h-[var(--app-header-height)] drag px-4 flex items-center", {
  variants: {
    os: {
      mac: "justify-end",
      win: "justify-between",
    },
  },
  defaultVariants: {
    os: "win",
  },
});

export default function AppHeader() {
  const isMac = window.is.isMacOS;

  if (isMac) {
	return (
      <header className={AppHeaderClass({ os: 'mac' })}>
        <h1 className="app-title">React App</h1>
      </header>
    );
  }

  return (
    <header className={AppHeaderClass({ os: 'win' })}>
      <h1 className="text-base">React App</h1>
    </header>
  );
}

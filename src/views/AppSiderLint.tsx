import { NavLink } from "react-router-dom";
import { cva } from "class-variance-authority";

export interface AppSiderLinkProps {
  children: React.ReactNode;
  to: string;
}

const LinsClass = cva("flex items-center py-3 my-2 justify-center relative", {
  variants: {
    state: {
      active:
        "after:w-[3px] after:h-full after:absolute after:block after:bg-purple-400 bg-purple-400/20 text-purple-400 after:left-0 after:top-0 after:rounded-e-sm",
      pending: "pending",
      transitioning: "transitioning",
    },
  },
});

export default function AppSiderLink({ to, children }: AppSiderLinkProps) {
  const onChangeClass = ({ isActive, isPending, isTransitioning }: any) => {
    return LinsClass({
      state: isPending ? "pending" : isActive ? "active" : isTransitioning ? "transitioning" : undefined,
    });
  };

  return (
    <div className="w-full">
      <NavLink to={to} className={onChangeClass}>
        {children}
      </NavLink>
    </div>
  );
}

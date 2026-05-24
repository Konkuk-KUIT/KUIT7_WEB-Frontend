import type { ReactNode } from "react";
import Button from "../components/ui/Button";

interface TopBarProps {
  rightContent?: ReactNode;
}

export default function TopBar({ rightContent }: TopBarProps) {
  return (
    <header className="flex h-20 items-end justify-between px-2 pb-2">
      <Button variant="ghostIcon" type="button" aria-label="뒤로가기">
        <img className="size-6" src="/back.svg" alt="" />
      </Button>
      {rightContent}
    </header>
  );
}

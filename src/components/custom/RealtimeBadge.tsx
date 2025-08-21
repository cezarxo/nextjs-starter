"use client";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function RealtimeBadge() {
  const [flash, _setFlash] = useState(false);

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm border transition",
        flash ? "bg-green-100 border-green-300" : "bg-transparent",
      )}
      title="Realtime badge"
    >
      Realtime • Connected
    </span>
  );
}

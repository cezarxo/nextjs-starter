"use client";

import { useState } from "react";

export default function Counter({ initial = 0 }: { initial?: number }) {
  const [count, setCount] = useState(initial);
  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={() => setCount((c) => c - 1)}
        className="px-3 py-1 rounded border"
      >
        -
      </button>
      <span className="text-lg font-medium">{count}</span>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className="px-3 py-1 rounded border"
      >
        +
      </button>
    </div>
  );
}

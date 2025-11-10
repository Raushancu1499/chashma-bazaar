import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, type, children, ...props }, ref) => {
    if (!children)
      return (
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-slate-200 ring-1 ring-gray-200 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
            className
          )}
          ref={ref}
          {...props}
        />
      );

    return (
      <div
        className={cn(
          "flex gap-2 h-10 w-full rounded-md border border-slate-200 ring-1 ring-gray-200 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          className
        )}
      >
        {children}
        <input
          type={type}
          className="w-full outline-none h-full"
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

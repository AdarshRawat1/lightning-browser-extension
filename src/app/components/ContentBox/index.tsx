import React from "react";

export function ContentBox({ children }: React.PropsWithChildren<object>) {
  return (
    <div className="mt-6 bg-white rounded-md p-8 border border-gray-200 dark:border-neutral-700 dark:bg-surface-01dp flex flex-col gap-6">
      {children}
    </div>
  );
}

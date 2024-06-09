import { Text } from "@tarojs/components";
import { twMerge } from "tailwind-merge";

export function Title({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <Text className={twMerge("font-semibold underline", className)}>
      {children}
    </Text>
  );
}

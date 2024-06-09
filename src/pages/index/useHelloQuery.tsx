import { useQuery } from "@tanstack/react-query";

export function useHelloQuery() {
  return useQuery({
    queryKey: ["__query__", "hello"],
    queryFn: async () => {
      return new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve("Hello, Taro!");
        }, 1000);
      });
    },
  });
}

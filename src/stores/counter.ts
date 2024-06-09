import { createWithEqualityFn } from "zustand/traditional";
import { combine } from "zustand/middleware";

export const useCounterStore = createWithEqualityFn(
  combine({ count: 0 }, (set) => ({
    increment: () => set((state) => ({ count: state.count + 1 })),
  }))
);

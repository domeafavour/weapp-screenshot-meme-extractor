import { Title } from "@/components/Title";
import { useCounterStore } from "@/stores/counter";
import { Button, Text, View } from "@tarojs/components";
import "./index.less";
import { useHelloQuery } from "./useHelloQuery";

const Index = () => {
  const count = useCounterStore((store) => store.count);
  const increment = useCounterStore((store) => store.increment);
  const { isLoading, data } = useHelloQuery();
  return (
    <View className="wrapper">
      <Title className="bg-slate-300 text-lg">Title with underline</Title>
      <Title className="bg-slate-300 no-underline text-[50px]">
        Title without underline
      </Title>
      <Text>{isLoading ? "loading..." : data ?? "no data"}</Text>
      <Button onClick={() => increment()}>{count}</Button>
    </View>
  );
};

export default Index;

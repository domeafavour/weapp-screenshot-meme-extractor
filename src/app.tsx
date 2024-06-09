import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Component, PropsWithChildren } from "react";
import "./app.less";

const queryClient = new QueryClient();

class App extends Component<PropsWithChildren<{}>> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <QueryClientProvider client={queryClient}>
        {this.props.children}
      </QueryClientProvider>
    );
  }
}

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./shared/Router";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { NavermapsProvider } from "react-naver-maps";


const queryClient = new QueryClient();

function App() {
  return (
    <NavermapsProvider ncpClientId="ldgh7n9aiz">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Router />
      </QueryClientProvider>
    </NavermapsProvider>
  );
}

export default App;

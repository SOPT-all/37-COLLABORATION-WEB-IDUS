import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1분
        retry: 1, // 시도 횟수
        refetchOnWindowFocus: false, // 브라우저 창 다시 포커스할 때 자동으로 refetch 방지
      },
    },
  });
};

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = createQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

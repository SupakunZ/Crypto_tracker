"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const FIVE_MINUTES_INTERVAL = 1000 * 60 * 5
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchInterval: FIVE_MINUTES_INTERVAL, // fetch data every 5 min
        refetchOnWindowFocus: false  //**เปลี่ยนหน้าจะไม่โหลดใหม่ **/
      }
    }
  }));

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
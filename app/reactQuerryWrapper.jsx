"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const queryClient = new QueryClient();

export default function ReactQueryWrapper({ children }) {

  return (
    <QueryClientProvider client={queryClient}>

          {children}
    
    </QueryClientProvider>
  );
}

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Homepage } from "./pages/Homepage/Homepage";
import { Overview } from "./pages/Overview/Overview";
import { Details } from "./pages/Details/Details";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 3600000,
      },
    },
  });
  return (
    <div className="bg-bgOverview">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Overview />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/dog-details/:id" element={<Details />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;

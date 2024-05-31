import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from "react-router-dom";
import { WagmiProvider } from 'wagmi';
import "./App.css";
import { config } from './config';
import Home from "./pages/Home";
import Pool from "./pages/Pool";

export const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/pool" element={<Pool />} />
        </Routes>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;

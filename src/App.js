import { BrowserRouter } from "react-router-dom";
import { AppBar } from "./components/organisms/AppBar";
import { AppRoutes } from "./routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Suspense } from "react";
import { AuthContextProvider } from "./hooks/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <Provider store={store}>
          <Suspense fallback={<>Loading...</>}>
            <BrowserRouter>
              <AppBar />
              <AppRoutes />
            </BrowserRouter>
          </Suspense>
        </Provider>
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;

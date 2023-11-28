import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import { AuthProvider } from "./contexts/authContext";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}


import "../styles/globals.css";
import "../styles/output.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../context/Theme/ThemeContext";
import { LangProvider } from "@/context/Lang/LangContext";
import Navbar from "@/components/NavBar/NavBar";
import ToastProvider from "@/components/ToastCustom/ToastProvider";

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <ThemeProvider>
      <LangProvider>
        <Navbar />
        <ToastProvider />
        <Component {...pageProps} />
      </LangProvider>
    </ThemeProvider>
  );
};

export default App;

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isPaymentDoneRoute = router.asPath === "/payment-done";

  return (
    <>
      {!isPaymentDoneRoute && <Sidebar />}
      <Component {...pageProps} />;
    </>
  );
}

import { Provider as StoreProvider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { Provider as AuthProvider } from "next-auth/client";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    </AuthProvider>
  );
};

export default MyApp;

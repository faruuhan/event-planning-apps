import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import { AuthContext } from "../utils/Context";

function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("authEvent"));
    setAuth(auth);
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;

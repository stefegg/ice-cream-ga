import React, { useEffect, useState } from "react";
import "./App.css";
import { getBusinesses } from "./services";
import { Home } from "./pages";
import { Header } from "./components";
import { ratingURL } from "./constants";

function App() {
  const [businesses, setBusinesses] = useState(null);
  useEffect(() => {
    getBusinesses(ratingURL, setBusinesses);
  }, []);
  console.log(businesses, "------businesses");
  return (
    <>
      <Header />
      <Home businesses={businesses} />
    </>
  );
}

export default App;

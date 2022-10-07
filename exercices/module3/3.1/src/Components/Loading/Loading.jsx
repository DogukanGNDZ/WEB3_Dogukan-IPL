import App from "Components/App/App";
import { useState } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
    console.log(loading);
  }, 3000);

  return <>{loading ? <h1>Chargement</h1> : <App />}</>;
};
export default Loading;

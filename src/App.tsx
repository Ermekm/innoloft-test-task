import { useEffect } from "react";
import { Routes } from "./routes";
import { useAppDispatch } from "./hooks/redux";
import { fetchConfig } from "./store/ActionCreators";
import { setPrimaryColor } from "./helpers/setPrimaryColor";
import { type IConfig } from "./types/Config";
import "./App.css";

function App(): JSX.Element {
  const APP_ID = import.meta.env.VITE_APP_ID ?? 1;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchConfig(APP_ID))
      .then((res) => {
        const config = res.payload as IConfig;
        setPrimaryColor(config.mainColor);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return <Routes />;
}

export default App;

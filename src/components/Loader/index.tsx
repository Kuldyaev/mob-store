import { useState, useEffect } from "react";
import s from "./style.module.scss";

const Loader = () => {
  const [isShowed, setIsShowed] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsShowed(true), 1950);

    return () => {
      setIsShowed(false);
    };
  }, []);

  return (
    <div className={s.loader} style={{ opacity: isShowed ? 1 : 0 }}>
      <div className={s.spinner}>
        <div>{}</div>
        <div>{}</div>
        <div>{}</div>
        <div>{}</div>
        <div>{}</div>
        <div>{}</div>
        <div>{}</div>
        <div>{}</div>
      </div>
    </div>
  );
};

export default Loader;

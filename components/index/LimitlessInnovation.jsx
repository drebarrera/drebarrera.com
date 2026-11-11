import { useState, useEffect } from "react";
import ArrowLink from "@/components/arrowlink";

import styles from "@/styles/index.module.css";

export default function LimitlessInnovation() {
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      setClientHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    setClientHeight(window.innerHeight);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const height = {
    height: clientHeight - 60 + "px",
  };

  return (
    <section className={`${styles.limitless}`} style={height}>
      <div className={`${styles.content}`}>
        <h3>Limitless innovation and community bring progress.</h3>
        <div className={`${styles.centered}`}>
          <div className={`${styles.me}`}></div>
          <h4>Let's build something beautiful together.</h4>
          <ArrowLink
            details={{ link: "Send me a note or schedule a call", url: "https://calendly.com/drebarrera/chat" }}
          ></ArrowLink>
        </div>
      </div>
    </section>
  );
}
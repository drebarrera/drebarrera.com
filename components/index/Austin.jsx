import styles from "@/styles/index.module.css";
import { useEffect, useState } from "react";
import ArrowLink from "@/components/arrowlink";

export default function Austin() {
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
    height: clientHeight - 60 + "px"
  };

  return (
    <section className={`${styles.austin}`} style={height}>
      <div className={`${styles.content}`}>
        <div className={`${styles.info}`}>
          <div className={`${styles.container}`}>
            <div className={`${styles.location}`}>
              <img src="/images/icons/location.webp" />
              <h5>AUSTIN, TX</h5>
            </div>
            <p>
              I work with innovators across the globe to direct and support
              software and design projects.
            </p>
            <ArrowLink
              details={{ link: "Send me a note or schedule a call", url: "https://calendly.com/drebarrera/chat" }}
              className=""
            ></ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}

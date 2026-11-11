import styles from "@/styles/index.module.css";

export default function Introduction() {
  return (
    <section className={`${styles.introduction}`} /*style={height}*/>
      <div className={`${styles.content}`}>
        <section className={`${styles.textbox}`}>
          <h2>Hi, I'm Andr&#233;s</h2>
          <p>
            I help companies craft beautiful UI, orchestrate efficient
            automation, and prototype interconnected systems.
          </p>
        </section>
        <img
          className={`${styles.centerpiece}`}
          src="/images/centerpiece.gif"
        />
      </div>
    </section>
  );
}
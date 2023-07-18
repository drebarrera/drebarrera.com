import Header from "components/header";

import styles from "@/styles/404.module.css";

export default function NotFoundPage() {
  return (
    <div>
      <Header></Header>
      <div className={`${styles.frame}`}>
        <h2>404: Uh Oh.. Dinkle is mad at you...</h2>
        <h3>Just Kidding! She just can't find what you're looking for.</h3>
      </div>
    </div>
  );
}

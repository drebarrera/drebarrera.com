import Header from "components/header";

import styles from "@/styles/404.module.css";

export default function NotFoundPage() {
  return (
    <div>
      <Header></Header>
      <div className={`${styles.frame}`}>
        <h2>404</h2>
        <h3>Resource Not Found</h3>
      </div>
    </div>
  );
}

import Link from "next/link";

import styles from "@/styles/components/arrowlink.module.css"

const ArrowLink = (props) => {
  const details = props.details;
  return (<Link href={details.url} className={`${styles.arrowlink}`}>
    <div>
    <div className={`${styles.arrow}`}>
    <span>{`${details.link}`}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M34 7.75L38.25 12m0 0l-4.25 4.25M36 12H3"
      />
    </svg>
    </div>
    <div className={`${styles.underline}`}></div>
    </div>
    </Link>
  );
}

export default ArrowLink;

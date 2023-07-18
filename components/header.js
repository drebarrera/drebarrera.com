import Link from "next/link";

import styles from "@/styles/components/header.module.css"

export default function Header() {
  const HEADER_LINKS = [
    {
      href: "/work",
      name: "Work",
    },
    {
      href: "/projects",
      name: "Personal Projects",
    },
    {
      href: "/manifesto",
      name: "Manifesto",
    },
    {
      href: "/resume",
      name: "Resume",
    },
  ];

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.navbar}`}>
        <Link href="/">
          <h1>Andr&#233;s Barrera</h1>
        </Link>
        <div className={`${styles.nav}`}>
          {HEADER_LINKS.map((link) => {
            return (
              <Link href={link.href}>
                <span>{link.name}</span>
              </Link>
            );
          })}
          <Link href="/contact">
            <div className={`${styles.chatbutton}`}>Let's Chat</div>
          </Link>
        </div>
      </div>
    </header>
  );
}

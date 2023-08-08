import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

import styles from "@/styles/components/header.module.css";

export default function Header() {
  const HEADER_LINKS = [
    {
      href: "/#work",
      name: "Work",
    },
    {
      href: "/#projects",
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

  const [menuClicked, setMenuClicked] = useState(false);
  const [clientWidth, setClientWidth] = useState(0);

  const menuClick = () => {
    setMenuClicked(!menuClicked);
  };

  useEffect(() => {
    function handleResize() {
      setClientWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    setClientWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuStyle = menuClicked && (clientWidth < 850) ? { display: "flex" } : { display: "none" };

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.wrapper}`}>
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
              <div className={`${styles.chatbutton}`} scroll={false}>
                Let's Chat
              </div>
            </Link>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu"
            onClick={menuClick}
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>
      </div>
      <div className={`${styles.menu}`} style={menuStyle}>
      {HEADER_LINKS.map((link) => {
        return (
          <Link href={link.href} onClick={menuClick}>
            <div>{link.name}</div>
          </Link>
        );
      })}
      <Link href="/contact">
        <div className={`${styles.chatbutton}`} scroll={false}>
          Let's Chat
        </div>
      </Link>
      </div>
    </header>
  );
}

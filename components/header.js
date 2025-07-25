import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

import styles from "@/styles/components/header.module.css";

export default function Header() {
  const HEADER_LINKS = [
    {
      href: "/#about",
      name: "About",
    },
    {
      href: "/#work",
      name: "Work",
    },
    {
      href: "https://mission.drebarrera.com",
      name: "Mission",
    },
    {
      href: "/#projects",
      name: "Passion Projects",
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
    <header className={`top-[60px] md:top-[50px] ${styles.header}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.navbar}`}>
          <Link href="/">
            <h1>Andr&#233;s Barrera</h1>
          </Link>
          <div className={`${styles.nav}`}>
            {HEADER_LINKS.map((link) => {
              return (
                <Link key={link.name} href={link.href}>
                  <span>{link.name}</span>
                </Link>
              );
            })}
            <Link href="https://calendly.com/drebarrera/chat">
              <div className={`${styles.chatbutton}`} scroll="false">
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
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
          <Link key={link.name} href={link.href} onClick={menuClick}>
            <div>{link.name}</div>
          </Link>
        );
      })}
      <Link href="https://calendly.com/drebarrera/chat">
        <div className={`${styles.chatbutton}`} scroll="false">
          Let's Chat
        </div>
      </Link>
      </div>
    </header>
  );
}

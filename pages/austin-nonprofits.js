import Image from 'next/image';
import Link from 'next/link';

import styles from "@/styles/austin-nonprofits.module.css";

export default function AustinNonprofits() {
  return (
    <article className={`${styles.article}`}>
      <section className={`${styles.section}`}>
        <Image className={`${styles.img}`} src={'/images/nonprofit-atx.webp'} width={200} height={200} alt={"Nonprofit-ATX.png"}/>
        <h1>Austin Nonprofits</h1>
        <Link href={"https://join.slack.com/t/austin-nonprofit/shared_invite/zt-2144l85sn-jt1VMQA_RuKITE5khF1Bsw"}><div><p>Austin Nonprofits Slack</p></div></Link>
        <Link href={"https://www.youtube.com/live/Ix6sBf1bZD4?feature=share"}><div><p>Non-Profit Tech Summit</p></div></Link>
        <Link href={"https://www.meetup.com/austin-hispanic-hackers-meetup/"}><div><p>Hispanic Hackers Meetup</p></div></Link>
        <Link href={"http://www.hispanichackers.com"}><div><p>Hispanic Hackers Website</p></div></Link>
        <Link href={"mailto:hispanichackersboard@gmail.com"}><div><p>Hispanic Hackers Email</p></div></Link>
      </section>
    </article>
  )
}
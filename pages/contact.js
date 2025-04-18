import { Fragment, useState } from "react";
import Head from 'next/head';

import Header from "/components/header";

import styles from "@/styles/contact.module.css";

export default function ContactPage() {
  const [formSubject, setFormSubject] = useState("");
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [submitText, setSubmitText] = useState("Send");

  const POST = async () => {
    setSubmitText("Sending...");
    const PORTFOLIO_EMAIL_SERVICE_API =
      process.env.NEXT_PUBLIC_PORTFOLIO_EMAIL_SERVICE_API;
    const PORTFOLIO_EMAIL_SERVICE_ENDPOINT =
      process.env.NEXT_PUBLIC_PORTFOLIO_EMAIL_SERVICE_ENDPOINT;
  
    const packet = {
      subject: formSubject,
      sender: formName,
      email: formEmail,
      message: formMessage
    };
  
    const response = await fetch(PORTFOLIO_EMAIL_SERVICE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': PORTFOLIO_EMAIL_SERVICE_API,
      },
      body: JSON.stringify(packet),
    });
  
    if (!response.ok) {
      setSubmitText("Error!");
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      setSubmitText("Sent!");
      setFormSubject("");
      setFormName("");
      setFormEmail("");
      setFormMessage("");
      setTimeout(function() {
        setSubmitText("Send");
      }, 3000);
    }
  };

  return (
    <article className={styles.article}>
      <Head>
          <title>Write Me a Note</title>
          <meta name="description" content="Contact me. Let's create something beautiful." />
      </Head>
      <Header></Header>
      <section className={styles.section}>
        <h2>
          Send me a note.{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-8.698 6.825l-1.439-.507 5.701-5.215 1.436.396-5.698 5.326zm3.262 4.287l-1.323-.565 4.439-4.503 1.32.455-4.436 4.613zm-4.083.387l-1.481-.507 8-7.89 1.437.397-7.956 8z" />
          </svg>
        </h2>
        <div className={`${styles.me}`}></div>
        <form onSubmit={e => {e.preventDefault(); POST();}}>
          <label for="subject">Subject</label>
          <input name="subject" value={formSubject} onChange={e => setFormSubject(e.target.value)}></input>
          <label for="name">Your Name</label>
          <input name="name" value={formName} onChange={e => setFormName(e.target.value)}></input>
          <label for="email">Your Email</label>
          <input name="email" type="email" value={formEmail} onChange={e => setFormEmail(e.target.value)}></input>
          <label for="message">What's on your mind?</label>
          <textarea name="message" value={formMessage} onChange={e => setFormMessage(e.target.value)}></textarea>
          <button type="submit">
            {submitText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 3l-3.195 11.716-4.329-3.855 4.154-4.385-5.568 3.849-3.843-.934 12.781-6.391zm-7.988 8.876v4.124l1.735-2.578-1.735-1.546zm-4.136 5.684c-.646.405-1.312.765-1.986 1.069l.492 1.184c.675-.303 1.343-.658 1.992-1.056l-.498-1.197zm3.124-2.408c-.59.581-1.363 1.171-2.042 1.67l.505 1.214c.486-.346 1.087-.758 1.537-1.146v-1.738zm-5.808 5.137c-1.294.457-2.52.711-3.643.711-3.069 0-5.549-1.787-5.549-4.83 0-1.348.457-2.511 1.326-3.392 1-1 2.315-1.489 4.001-1.489 2.533 0 4.338 1.631 4.338 3.903 0 1.022-.369 1.957-1.033 2.62-.564.565-1.305.892-2.032.892-.425 0-.772-.163-.936-.424-.054-.087-.065-.142-.098-.337-.413.478-.848.685-1.457.685-1.076 0-1.761-.804-1.761-2.044 0-1.837 1.206-3.359 2.652-3.359.609 0 .913.152 1.207.609l.108-.38h1.285c-.065.217-.261.88-.315 1.12-.706 2.612-.695 2.504-.695 2.74 0 .447.616.27.967-.011.533-.413.881-1.218.881-2.055 0-1-.468-1.87-1.25-2.359-.489-.293-1.175-.457-1.946-.457-2.294 0-3.903 1.522-3.903 3.675 0 3.446 3.626 4.262 7.361 2.996l.492 1.186zm-3.397-5.282c0-.446-.25-.75-.631-.75-.413 0-.794.271-1.065.783-.261.489-.435 1.13-.435 1.631 0 .576.217.88.631.88.401 0 .782-.315 1.064-.87.262-.511.436-1.174.436-1.674z" />
            </svg>
          </button>
        </form>
      </section>
    </article>
  );
}

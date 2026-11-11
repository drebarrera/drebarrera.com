import { Fragment, useState } from "react";
import Head from 'next/head';

import Header from "/components/header";

import styles from "@/styles/contact.module.css";

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://calendly.com/drebarrera/chat',
      permanent: false,
    },
  };
}

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

  return null;
}

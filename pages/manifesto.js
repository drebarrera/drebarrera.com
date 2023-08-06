import Header from "components/header";
import { Fragment } from "react"
import Link from 'next/link';

import styles from "@/styles/manifesto.module.css";

import manifesto from "data/manifesto.json"
import skills from "data/skills.json"
import tools from "data/tools.json"

function Manifesto() {
    return (
        <article className={`${styles.macrosection}`}>
            <div className={`${styles.content}`}>
                <h4>MANIFESTO</h4>
                <div className={`${styles.manifesto}`}>
                    {
                    manifesto.map((value) => {
                        const url = {
                            "--url": `url(${value.img})`,
                        };
                        return (
                            <section className={`${styles.value}`}>
                                <div className={`${styles.icon}`} style={url}></div>
                                <div className={`${styles.text}`}>
                                    <h5 className={`${styles.title}`}>{value.title}</h5>
                                    <p className={`${styles.info}`}>{value.info}</p>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </article>
    )
}

function Skills() {
    return (
        <article className={`${styles.macrosection}`}>
            <div className={`${styles.content}`}>
                <h4>SKILLS</h4>
                <div className={`${styles.skills}`}>
                    {
                    Object.keys(skills).map((skill) => {
                        const barwidth = {
                            "--barwidth": skills[skill],
                        };
                        return (
                            <div className={`${styles.skill}`}>
                                <div className={`${styles.row}`}>
                                    <div className={`${styles.bar}`} style={barwidth}>
                                        <div className={`${styles.skillbar}`}></div>
                                    </div>
                                    <p>{skills[skill]}</p>
                                </div>
                                <h6>{skill}</h6>
                            </div>
                        );
                    })}
                </div>
            </div>
        </article>
    )
}

function Tools() {
    return (
        <article className={`${styles.macrosection}`}>
            <div className={`${styles.content}`}>
                <h4>Tools</h4>
                <div className={`${styles.tools}`}>
                    {
                    tools.map((tool) => {
                        return (
                            <section className={`${styles.toolset}`}>
                                <h5>{tool.title}</h5>
                                <div className={`${styles.toolcontent}`}>
                                    {
                                    Object.keys(tool.tools).map((item) => {
                                        const url = {
                                            "--url": `url("images/tools/${item.replace(' ', '_')}.png")`,
                                        };
                                        return (
                                            <Link href={`${tool.tools[item]}`} target="_blank">
                                                <div className={`${styles.tool}`}>
                                                    <div className={`${styles.icon}`} style={url}></div>
                                                    <h6>{`${item}`}</h6>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </article>
    )
}

export default function ManifestoPage() {
    return (
        <Fragment>
            <Header></Header>
            <Manifesto></Manifesto>
            <Skills></Skills>
            <Tools></Tools>
        </Fragment>
    );
}
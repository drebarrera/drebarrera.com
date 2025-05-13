import Header from "/components/header";
import { Fragment } from "react"
import Head from 'next/head';
import Tool from "/components/tool";
import { useState, useEffect } from "react";

import styles from "@/styles/manifesto.module.css";
import skills from "/data/skills.json"
import manifesto from "/data/manifesto.json"
import tools from "/data/tools.json"

function Manifesto() {
    return (
        <article className={`${styles.macrosection} ${styles.macromanifesto}`}>
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
                <h4>ENGINEERING SKILLS</h4>
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
    const entries = Object.entries(tools);
    const sortedEntries = entries.sort(([, a], [, b]) => b.year - a.year);

    const categories = ['design', 'frontend', 'backend', 'devops', 'engineering', 'community', 'other'];
    const [selected, setSelected] = useState([]);
    const [search, setSearch] = useState("");

    const handleClick = (key, event) => {
        setSelected((prevSelected) => {
            if (prevSelected.includes(key)) {
                return prevSelected.filter((cat) => cat !== key);
            } else {
                return [...prevSelected, key];
            }
        });
    }
    
    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
        <article className={`${styles.macrosection} ${styles.macrotool}`}>
            <div className={`${styles.content}`}>
                <h4>MY TOOLBOX</h4>
                <div className={`${styles.search}`}>
                    <p>Search All {Object.entries(tools).length} Skills:</p>
                    <input type="text" value={search} onChange={handleSearch}/>
                </div>
                <div className={`${styles.filters}`}>
                        {
                            categories.map((category) => {
                                const gradient = {
                                    "--gradient-top": (category === 'backend') ? '#5CA4A9' : 
                                    (category === 'frontend') ? '#88C29A' : 
                                    (category === 'devops') ? '#F4B400' : 
                                    (category === 'design') ? '#FF6B6B' : 
                                    (category === 'other') ? '#6E7C7C' : 
                                    (category === 'engineering') ? '#FFA07A' : 
                                    (category === 'community') ? '#9E579D' : 
                                    '#A3A948',
                                    "--gradient-bottom": (category === 'backend') ? '#247BA0' : 
                                    (category === 'frontend') ? '#4A8F69' : 
                                    (category === 'devops') ? '#F57C00' : 
                                    (category === 'design') ? '#D83367' : 
                                    (category === 'other') ? '#3B3B3B' : 
                                    (category === 'engineering') ? '#FF4500' : 
                                    (category === 'community') ? '#674172' : 
                                    '#B5E655'
                                };
                                return <div onClick={(event) => handleClick(category, event)} className={`${styles.category}`} style={gradient}><p className={`${selected.includes(category) ? styles.categorySelected : ''}`}>{category == 'devops' ? 'devops & cloud' : category}</p></div>;
                            })
                        }
                    </div>
                <div className={`${styles.tools}`}>
                    {
                        sortedEntries.map(([key, value], index) => {
                            var isSelected = false;
                            selected.forEach((cat) => {
                                if (cat == value.type) {
                                    isSelected = true;
                                }
                            });
                            if ((selected.length == 0 || isSelected) && key.toLowerCase().includes(search.toLowerCase()))
                                return <Tool key={index} details={ { "name": key, "type": value.type, "url": value.url, "year": value.year, "icon": value.icon} }></Tool>
                        })
                    }
                </div>
            </div>
        </article>
    )
}

export default function ManifestoPage() {
    return (
        <Fragment>
            <Head>
                <title>Manifesto</title>
                <meta name="description" content="My core values, skills, langauges, tools, and communities." />
            </Head>
            <Header></Header>
            <Manifesto></Manifesto>
            <Skills></Skills>
            <Tools></Tools>
        </Fragment>
    );
}
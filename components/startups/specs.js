import Item from "components/startups/icons/item";

import styles from "/styles/components/startups/specs.module.css";

function SpecInfo({ details }) {
    return (
        <>
            <p className={`${styles.name} ${details.mention ? styles.mention : null }`}>{details.name}</p>
            {details.icon}
            {details.info && <p className={`${styles.info} ${details.mention ? styles.mention : null }`}>{details.info}</p>}
            {details.description && <p className={styles.description}>{details.description}</p>}
            <div className={styles.pc}>
                <ul className={styles.pros}>
                {
                    details.pros && Object.entries(details.pros).map(([index, pro]) => {
                        return (
                            <li key={index}>
                                <Item>&#10003;</Item>
                                {pro}
                            </li>
                        )
                    })
                }
                </ul>
                <ul className={styles.cons}>
                {
                    details.cons && Object.entries(details.cons).map(([index, con]) => {
                        return (
                            <li key={index}>
                                <Item>X</Item>
                                {con}
                            </li>
                        )
                    })
                }
                </ul>
            </div>
    </>
    );
}

export default function Specs({ details }) {
    return (
        details.href ? 
            <a href={details.href} className={`${styles.spec} ${details.mention ? styles.mentionSpec : null }`} target="_blank"><SpecInfo details={details}></SpecInfo></a>
        :   <div className={`${styles.spec} ${details.mention ? styles.mentionSpec : null }`}><SpecInfo details={details}></SpecInfo></div>
    )
}
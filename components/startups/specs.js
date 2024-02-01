import Item from "components/startups/icons/item";

import styles from "/styles/components/startups/specs.module.css";

export default function Specs({ details }) {
    return (
        <div className={styles.spec}>
            <p className={styles.name}>{details.name}</p>
            {details.icon}
            {details.info && <p>{details.info}</p>}
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
        </div>
    );
}
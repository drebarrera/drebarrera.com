import styles from "@/styles/corazon.module.css";

export default function Corazon() {
    return (
        <div className={`${styles.main}`}>
            <p>💕 Me robaste el corazon! 💕</p>
            <img src="/images/turtle.gif"/>
            <p>💕 You stole my heart! 💕</p>
        </div>
    )
}
import Link from "next/link";

import styles from "@/styles/components/tool.module.css";

export default function Tool(props) {
    const currentYear = new Date().getFullYear();
    const category = props.details.type;
    const url = props.details.url;
    const name = props.details.name;
    const years = props.details.year;
    const icon = (props.details.icon) ? props.details.icon : "";
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

    return (
        <Link href={url} className={`${styles.tool}`} style={gradient} target="_blank">
            <div className={`${styles.badge}`}>
                <p className={`${styles.category}`}>{`${category}`}</p>
                <h5>{`${name}`}</h5> 
                <div dangerouslySetInnerHTML={{ __html: icon }} className={`${styles.icon}`}></div>
                <div className={`${styles.experience}`}>
                    <p>{`${years} Years Experience`}</p>
                    <div className={`${styles.years}`}>
                        {
                            Array.from({ length: years }, (_, i) => (
                                <span key={i}>&#9733;</span>
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </Link>
    )
}
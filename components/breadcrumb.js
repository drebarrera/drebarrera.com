import styles from "/styles/components/breadcrumb.module.css";

export default function Breadcrumb({ breadcrumbArray }) {
    return (
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
                {
                    Object.entries(breadcrumbArray).map(([item, url], index) => {
                        return (
                            <li key={index} itemProp="itemListElement" itemScope
                            itemType="https://schema.org/ListItem">
                                <a itemProp="item" href={url}>
                                    <span itemProp="name">{item}</span>
                                </a>
                                <meta itemProp="position" content={`${index}`} />
                            </li>
                        );
                    })
                }
            </ol>
        </nav>
    );
}
import styles from "/styles/components/breadcrumb.module.css";

export default function Breadcrumb({ breadcrumbArray }) {
    console.log(breadcrumbArray);
    return (
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <ol itemscope itemtype="https://schema.org/BreadcrumbList">
                {
                    Object.entries(breadcrumbArray).map(([item, url], index) => {
                        return (
                            <li itemprop="itemListElement" itemscope
                            itemtype="https://schema.org/ListItem">
                                <a itemprop="item" href={url}>
                                    <span itemprop="name">{item}</span>
                                </a>
                                <meta itemprop="position" content={`${index}`} />
                            </li>
                        );
                    })
                }
            </ol>
        </nav>
    );
}
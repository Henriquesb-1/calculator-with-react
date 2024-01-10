import "./link.css";

interface LinksProps {
    backgroundClassName: string;
    link: string;
    label: string;
}

export default function Link({ backgroundClassName, link, label }: LinksProps) {
    return (
        <div className="menu-links">
            <div className={`${backgroundClassName} menu-item`}>
                <a href={link}>
                    <div className="menu-description">
                        <p> {label} </p>
                    </div>
                </a>
            </div>
        </div>
    )
}
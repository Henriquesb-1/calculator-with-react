import "./link.css";

interface LinksProps {
    elementName: string;
    link: string;
    label: string;
}

export default function Link({ elementName, link, label }: LinksProps) {
    return (
        <div className="menu-links">
            <div className={`${elementName} menu-item`}>
                <a href={link}>
                    <div className="menu-description">
                        <p> {label} </p>
                    </div>
                </a>
            </div>
        </div>
    )
}
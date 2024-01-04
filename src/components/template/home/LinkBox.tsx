import "./linkBox.css";

interface LinkBoxProps {
    link: string;
    imageSrc: string;
    alt: string;
    caption: string;
}

export default function LinkBox({ link, imageSrc, alt, caption }: LinkBoxProps) {
    return (
        <div className="menu-nav">
            <a href={link} className="menu-link">
                <div className="menu-nav-cover">
                    <img src={imageSrc} alt={alt} />
                </div>

                <div className="menu-nav-caption">
                    <span> {caption}</span>
                </div>
            </a >
        </div>
    )
}
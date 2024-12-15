import Link from "next/link";

export default function Resources() {

    return (
        <div className="page">
            <div className="headline">
                <h2>Additional Resources</h2>
            </div>

            <ul className="fancyList">
                <li>
                <Link href="/resources/terms-of-use">
                    Voicebanks Terms of Use
                </Link>
                </li>
                <li>
                <a href="https://drive.google.com/drive/folders/1CNs7Au_cNMaOS39y4bZao2hE3Id4XSBs" target="_blank" rel="noopener noreferrer">
                    Google Drive folder
                </a>
                </li>
                <li>USTs (coming spoon)</li>
                <li>My other UTAUs</li>
                <ul>
                    <li><a href="https://drive.google.com/drive/folders/1NcNlGuOUJZE1BYeFtro7gGf5aCuI6gyy" target="_blank" rel="noopener noreferrer">
                        N.A.O.S
                    </a></li>
                    <li>Astre Phoenix (coming fork)</li>
                </ul>
            </ul>
        </div>
    );

}
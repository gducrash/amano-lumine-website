import Link from "next/link";

export default function TermsOfUse() {

    return (
        <div className="page">
            <div className="headline">
                <h1>Voicebank Terms of Use</h1>
                <p style={{ opacity: 1 }}>
                    <Link href="/resources">Back</Link>
                </p>
            </div>

            <div className="contentMono">
            <p>
                Last update: April 27, 2024
            </p>

            <h2>General</h2>
            <ul>
                <li>Non-commercial use only.</li>
                <li>When publishing work using this voicebank, while it is not necessary to state the name of this voicebank's author, you are required to state the name of the voicebank.</li>
                <li>Claiming ownership of the character or the voicebanks is forbidden.</li>
                <li>Using the voice / image for another singer is forbidden.</li>
                <li>Creating derivative characters is only allowed with astrasuz's permission.</li>

                <li>Creation of content featuring Lumine that contains the following is allowed:</li>
                <ul>
                    <li>Mild violence;</li>
                    <li>Mildly suggestive themes (restricted: allowed covering songs with these themes in lyrics, forbidden otherwise).</li>
                </ul>

                <li>Creation of content featuring Lumine that contains the following is forbidden:</li>
                <ul>
                    <li>Political content;</li>
                    <li>Religious content; </li>
                    <li>Bigotry or discrimination;</li>
                    <li>Extreme violence and gore;</li>
                    <li>Explicit sexual themes;</li>
                    <li>Criminal or illegal content;</li>
                    <li>NFT, blockchain, cryptocurrency;</li>
                    <li>AI imagery of any kind, including generating images of Lumine using AI or using Lumine's official images to train an AI.</li>
                </ul>
            </ul>

            <h2>Voicebank</h2>
            <ul>
                <li>Editing configuration files (oto.ini, .frq) is allowed.</li>
                <li>Editing the audio files themselves is only allowed for enhancing and cleaning up the audio.</li>
                <li>Redistributing configuration files is allowed.</li>
                <li>Redistributing voicebanks in their entirety is forbidden.</li>
                <li>Porting voicebanks to a non-AI engine (ex. DeepVocal, NIAONiao) is allowed.</li>
                <li>Porting voicebanks to an AI engine (ex. RVC, DiffSVC) is only allowed with astrasuz's permission.</li>
                <li>Redistributing ports is only allowed with astrasuz's permission.</li>
            </ul>

            <h2>Character and artwork</h2>
            <ul>
                <li>Shipping Lumine with other characters is only allowed with astrasuz's permission.</li>
                <li>Using the official images of the character for non-commercial use is allowed. 
                    When using the official pictures provided in the "img" folder, you are required to credit the artist (astrasuz).</li>
                <li>Major or malicious editing, recoloring, tracing, or otherwise repurposing the artwork for another character is forbidden.</li>
                <li>Fan creations, such as illustrations, 3d models, cosplay, etc. are allowed.</li>

            </ul>

            <p>
                astrasuz is not responsible for any damages caused by usage of the voicebanks or the character. <br />
                astrasuz has the right to request take down of published content at any time, and users are expected to comply.
            </p>

            <p>
                The terms of use are subject to change and may change without notice. <br />
                Please contact astrasuz for any questions regarding the terms of use.
            </p>

            </div>
        </div>
    );

}
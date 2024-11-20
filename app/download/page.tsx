'use client';

import styles from './page.module.scss';

import { src } from "@/util/functions";
import Button from "@/components/Button";

import downloadIcon from '@/assets/icons/download.svg';
import sampleIcon from '@/assets/icons/sample.svg';
import stopIcon from '@/assets/icons/stop.svg';


export default function Download() {
    return (
        <div className="page">

            <div className="headline">
                <h1>Download</h1>
                <p>Amano Lumine comes in 5 different voicebanks,
                which all have a unique tone of voice</p>
            </div>

            <div className={styles.items}>
                <DownloadItem 
                    cover="/voicebanks/cover0.png"
                    title="Amano Lumine &#x2011;Supernova&#x2011;"
                    desc="All four Project SABeR voicebanks in one set"
                    type="Japanese CVVC"
                    pitches="A3, D4, G4"
                    lastUpdate={new Date(2024, 3, 25)}
                    fileSize={198.7}
                    downloadUrl="https://drive.google.com/file/d/18n8Dgqi8VJPYa48IPGIzZSIpO3oeGrVi/view?usp=sharing"
                    sample="/sound/test2.mp3"
                />

                <DownloadItem 
                    cover="/voicebanks/cover0.png"
                    title="Amano Lumine &#x2011;Spica&#x2011;"
                    color="#88AEFF"
                    desc="Voicebank with a childish tone"
                    type="Japanese CVVC"
                    pitches="D4"
                    lastUpdate={new Date(2024, 3, 22)}
                    fileSize={30.2}
                    downloadUrl="https://drive.google.com/file/d/1GU8pwgJjfGCRWOdAFlxMHNDw7rL9fioV/view?usp=sharing"
                    sample="/sound/test2.mp3"
                />

                <DownloadItem 
                    cover="/voicebanks/cover0.png"
                    title="Amano Lumine &#x2011;Antares&#x2011;"
                    color="#FF8888"
                    desc="Voicebank with a tense tone"
                    type="Japanese CVVC"
                    pitches="A3, D4, G4"
                    lastUpdate={new Date(2024, 3, 23)}
                    fileSize={68.9}
                    downloadUrl="https://drive.google.com/file/d/1A0Ytk6cazko6ikgvayWjjkdo2oK2Xj7g/view?usp=sharing"
                    sample="/sound/test2.mp3"
                />

                <DownloadItem 
                    cover="/voicebanks/cover0.png"
                    title="Amano Lumine &#x2011;Betelgeuse&#x2011;"
                    color="#FFC568"
                    desc="Voicebank with a mature tone"
                    type="Japanese CVVC"
                    pitches="D4"
                    lastUpdate={new Date(2024, 3, 22)}
                    fileSize={68}
                    downloadUrl="https://drive.google.com/file/d/1NnC1_WLZPqQDiD6jpHJIdzmkDTy92iFS/view?usp=sharing"
                    sample="/sound/test2.mp3"
                />

                <DownloadItem 
                    cover="/voicebanks/cover0.png"
                    title="Amano Lumine &#x2011;Rigel&#x2011;"
                    color="#88EDFF"
                    desc="Voicebank with a weak tone"
                    type="Japanese CVVC"
                    pitches="A3, D4, G4"
                    lastUpdate={new Date(2024, 3, 23)}
                    fileSize={68}
                    downloadUrl="https://drive.google.com/file/d/1BTzahf0QY7uwVcPsTMF1DFzOd9wq4GzW/view?usp=sharing"
                    sample="/sound/test2.mp3"
                />
            </div>

            
        </div>
    );
}

type DownloadItemProps = {
    cover: string;
    color?: string;
    title: string;
    desc: string;
    type: string;
    pitches: string;
    lastUpdate: Date;
    fileSize: number;
    downloadUrl: string;
    sample: string;
}

const DownloadItem = ({ 
    cover, color, title, desc,
    type, pitches, lastUpdate,
    fileSize, downloadUrl, sample 
}: DownloadItemProps) => {
    return (
        <div className={styles.downloadItem}>
            <div className={styles.cover}>
                <img width={100} height={100} src={src(cover)} alt="Lumi Cover" />
            </div>
            <div className={styles.info}>
                <h2 style={{ color}}>{title}</h2>
                <p>{desc}</p>
                <p className={styles.infoDesc}>
                    {type} • Pitches: {pitches} <br/>
                    Last update: {lastUpdate.toDateString()}
                </p>
            </div>
            <div className="btnCol">
                <Button small primary icon={downloadIcon} onClick={() => {
                    window.open(downloadUrl);
                }}>
                    Download <span>({fileSize.toFixed(1)} MB)</span>
                </Button>
                <Button small secondary icon={sampleIcon} iconStop={stopIcon}
                    playable sound={src(sample)}
                >
                    Sample
                </Button>
            </div>
        </div>
    );
}
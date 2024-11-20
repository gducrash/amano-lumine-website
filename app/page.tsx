'use client';

import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import cn from 'classnames';

import Button from '@/components/Button';
import { src } from '@/util/functions';

export default function Home() {
    const router = useRouter();
    const [ isTrs, setIsTrs ] = useState(false);

    return (
        <>
        <div className={styles.logo}>
            { [0,1].map(k => <img key={k} src={src('/images/logoText.png')} alt="天乃ルミーン" draggable="false" className={cn(styles.logoImg, {
                [styles.trs]: isTrs,
            })} />) }
        </div>
        <div className={cn('page', {
            trs: isTrs,
        })}>

            <main className={styles.main}>

                <div className="row">

                <div className="col">
                    <img src={src('/images/lumi1.webp')} alt="Amano Lumine" className={styles.lumi} />
                </div>

                <div className="col">
                    <p className="big">
                        <span>Amano Lumine</span> is a romantic, dreamy individual. She's usually quiet and reserved, 
                        but becomes talkative when she finds someone who shares interests with her. In other cases, 
                        she's composed, though gets very anxious when things don't go according to her plans.
                        <br/><br/>
                        Lumine has a huge interest in astronomy, though she also likes to sing as a hobby. On clear 
                        nights, she can be found observing her favorite stars. She is a night owl and often sleeps 
                        during the day.
                    </p>
                    <div className="btnRow">
                        <Button primary onClick={() => {
                            setIsTrs(true);
                            setTimeout(() => {
                                router.push('/download');
                            }, 500);
                        }}>Download</Button>
                        <Button secondary onClick={() => {
                            setIsTrs(true);
                            setTimeout(() => {
                                router.push('/character');
                            }, 500);
                        }}>Read More</Button>
                    </div>
                </div>

                </div>
            </main>
        </div>
        </>
    );
}

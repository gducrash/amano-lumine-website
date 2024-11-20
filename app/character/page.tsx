'use client';

import styles from './page.module.scss';

import cn from 'classnames';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { src } from '@/util/functions';

import UnorderedList from "@/components/UnorderedList";
import Button from '@/components/Button';

export default function Character() {
    const router = useRouter();
    const [ isTrs, setIsTrs ] = useState(false);

    return (
        <div className={cn('page', {
            trs: isTrs,
        })}>

            <div className="headline">
                <h2>Character Details</h2>
            </div>

            <main className={cn("col", styles.col)}>
                
                <div className={cn("row", styles.row)}>
                    <UnorderedList>
                        <><h1>Lumine Amano</h1> <span>(天乃ルミーン)</span></>
                        <><span>Gender:</span> Female</>
                        <><span>Age:</span> 20</>
                        <><span>Height:</span> 175 cm (5'9")</>
                        <><span>Weight:</span> 16 solar masses * acceleration due to gravity (just kidding)</>
                        <><span>Nickname:</span> Lumi</>
                        <><span>Birthday:</span> December 20th</>
                        <><span>Sexuality:</span> Asexual</>
                        <><span>Species:</span> Human</>
                        <><span>Likes:</span> space, clear winter nights, chocolate</>
                        <><span>Dislikes:</span> cloudy night skies, thinking about the future, coffee, waking up early</>
                    </UnorderedList>
                    <img src={src('/images/lumi2.png')} alt="Amano Lumine" className={styles.lumi2} />
                </div>

                <div className={cn("row", styles.row, styles.reverseMobile)} style={{ marginTop: 20 }}>
                    <img src={src('/images/lumi3.png')} alt="Amano Lumine Chibi Design" className={styles.lumi3} />
                    <div className="col">
                        <p className="wide">
                            <span>Lumine</span> is a romantic, dreamy individual. She's usually quiet and reserved, 
                            but becomes talkative when she finds someone who shares interests with her. 
                            In other cases, she's composed, though gets very anxious when things don't 
                            go according to her plans.
                        </p>
                        <p className="wide">
                            Lumine has a huge interest in astronomy, though she also likes to sing as 
                            a hobby. On clear nights, she can be found observing her favorite stars. 
                            She is a night owl and often sleeps during the day.
                        </p>
                        <p className="wide">
                            She has an artificial star-shaped companion nicknamed <span>"Lumine B"</span>, and an 
                            octahedron-shaped "planet" orbiting it, nicknamed <span>"Lumine Bb"</span>. Lumine B 
                            seems to understand humans, as well as observe and record the surroundings, 
                            however it's not able to communicate back by humanly-comprehensible means.
                            It also has a function to attack anything it considers to be an enemy. 
                            Lumine has initially made it so that it could kill the bugs that occasionally 
                            crawl in her room without her permission, but it can also be useful in case 
                            of an alien invasion, as it can recognize friendly and unfriendly beings.
                        </p>
                        <p className="wide">
                            Lumine's background and personality are entirely optional so as to not limit the creative usage.
                        </p>
                    </div>
                </div>

                <div className="btnRow">
                    <Button secondary onClick={() => {
                        setIsTrs(true);
                        setTimeout(() => {
                            router.push('/songs');
                        }, 500);
                    }}>Songs & Covers featuring Lumine</Button>
                    <Button secondary onClick={() => {
                        setIsTrs(true);
                        setTimeout(() => {
                            router.push('/resources');
                        }, 500);
                    }}>Additional Resources</Button>
                </div>
            </main>
        </div>
    );
}
'use client';

import { useState } from 'react';
import styles from './page.module.scss';
import { platformName, src } from "@/util/functions";
import { AnimatePresence } from 'motion/react';
import DialogBox from '@/components/DialogBox/DialogBox';

type Song = {
    title: string;
    authors: string;
    type: 'original' | 'cover';
    date: Date;
    cover: string;
    links: {
        type:
            | 'youtube'
            | 'ytmusic'
            | 'soundcloud'
            | 'bandcamp'
            | 'spotify'
            | 'other';
        url: string;
    }[];
    description?: string;
}

const SONGS: Song[] = [
    {
        title: "Laserfocused",
        authors: "Ucrash & astrasuz",
        type: "original",
        date: new Date(2024, 10, 9),
        cover: "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:d4jtcialbxvglznpyr4inyvd/bafkreicwvg5ik6pqrkdlco2vghgsvmzzfwv4ug7om4gfcigpnrgmadjnvi@jpeg",
        links: [
            { type: 'ytmusic', url: 'https://music.youtube.com/watch?v=fNcQ9NHEndk' },
            { type: 'spotify', url: 'https://open.spotify.com/album/4e6Ji3G7kKLbfzjbedztpk' },
            { type: 'soundcloud', url: 'https://soundcloud.com/gducrash/laserfocused-feat-amano-lumine' },
        ],
        description: "",
    },
    {
        title: "Fragile [Cover]",
        authors: "astrasuz",
        type: "cover",
        date: new Date(2024, 5, 15),
        cover: "https://img.youtube.com/vi/fPqFkc3VVpc/maxresdefault.jpg",
        links: [
            { type: 'youtube', url: 'https://youtube.com/watch?v=fPqFkc3VVpc' },
        ],
        description: "🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲",
    },
    {
        title: "brilliant [Cover]",
        authors: "astrasuz",
        type: "cover",
        date: new Date(2024, 3, 25),
        cover: "https://img.youtube.com/vi/l3nOtwUGfhM/maxresdefault.jpg",
        links: [
            { type: 'youtube', url: 'https://youtube.com/watch?v=l3nOtwUGfhM' },
        ],
        description: "🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲",
    },
    {
        title: "Meltdown (music box) [Cover]",
        authors: "astrasuz",
        type: "cover",
        date: new Date(2024, 2, 6),
        cover: "https://img.youtube.com/vi/F8WxXoh99dc/maxresdefault.jpg",
        links: [
            { type: 'youtube', url: 'https://youtube.com/watch?v=F8WxXoh99dc' },
        ],
        description: "🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲\n\n🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲",
    },
    {
        title: "WAVE [Cover]",
        authors: "astrasuz",
        type: "cover",
        date: new Date(2024, 1, 26),
        cover: "https://img.youtube.com/vi/_5tcrjGSxzI/maxresdefault.jpg",
        links: [
            { type: 'youtube', url: 'https://youtube.com/watch?v=_5tcrjGSxzI' },
        ],
        description: "🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲\n\n🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲",
    },
    {
        title: "Starduster [Cover]",
        authors: "astrasuz",
        type: "cover",
        date: new Date(2024, 0, 21),
        cover: "https://img.youtube.com/vi/zgezmzSvVDQ/maxresdefault.jpg",
        links: [
            { type: 'youtube', url: 'https://www.youtube.com/watch?v=zgezmzSvVDQ' },
        ],
        description: "🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲\n\n🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲",
    },
];

export default function Songs() {

    const [ currentSong, setCurrentSong ] = useState<Song | null>(null);

    return (
        <div className="page">
            <div className="headline">
                <h1>Songs</h1>
                <p>Here are some songs and covers featuring Amano Lumine</p>
            </div>

            <AnimatePresence>
                { currentSong && <DialogBox onClose={() => setCurrentSong(null)}>
                    <h1>{currentSong.title}</h1>
                    <p className='subtext'>by {currentSong.authors} | Released {currentSong.date.toDateString()}</p>

                    <br/>
                    <p>{currentSong.description}</p>

                    { currentSong.links.some(link => link.type === 'ytmusic' || link.type === 'youtube') && <iframe 
                        src={`https://youtube.com/embed/${currentSong.links.find(link => 
                            link.type === 'ytmusic' || 
                            link.type === 'youtube'
                        )?.url.split('v=')[1]}`}
                        allow="autoplay; encrypted-media" 
                        height={400}
                        allowFullScreen
                        frameBorder="0"
                    /> }

                    { !!currentSong.links.length && <>
                        <br/>
                        <p>Listen on:</p>
                        <ul className='fancyList'>
                            { currentSong.links.map(link => <li key={link.type}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    <span>{platformName(link.type)}</span>
                                </a>
                            </li>) }
                        </ul>
                    </>}
                </DialogBox> }
            </AnimatePresence>

            <div className="grid">
                { SONGS.map((song, idx) => <SongItem 
                    song={song}
                    onClick={() => setCurrentSong(song)}
                    idx={idx}
                    key={song.title}
                />) }
            </div>
        </div>
    );

}


type SongItemProps = {
    song: Song;
    onClick?: () => void;
    idx: number;
};

const SongItem = ({ 
    song: { title, authors, type, date,
    cover, links }, onClick, idx,
}: SongItemProps) => {
    return (
        <div className={styles.songItem} onClick={onClick} style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className={styles.cover} style={{ backgroundImage: `url(${cover})` }} />
            
            <div className={styles.links}>
                { links.map(link => <a 
                    href={link.url} target="_blank" rel="noopener noreferrer" 
                    key={link.type} onClick={e => e.stopPropagation()}
                >
                    <img src={src(`/icons/ic_${link.type}.svg`)} alt={link.type} />
                </a>) }
            </div>

            <div className={styles.info}>
                <h2>{title}</h2>
                <p>{authors} | {type === 'original' ? 'Original song' : 'Cover'} | {date.toDateString()}
                </p>
            </div>
        </div>
    );
}
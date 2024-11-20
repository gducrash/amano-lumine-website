'use client';

import classes from './Button.module.scss';

import Image from 'next/image';
import { useRef, useState } from 'react';
import cn from 'classnames';

type ButtonProps = {
    children: React.ReactNode;
    primary?: boolean;
    secondary?: boolean;
    small?: boolean;
    icon?: string;
    iconStop?: string;

    onClick?: () => void;

    playable?: boolean;
    sound?: string;
};

const Button = ({ 
    children, primary, secondary, small,
    icon, iconStop, onClick, playable, sound,
}: ButtonProps) => {
    const soundRef = useRef<HTMLAudioElement>(null);
    const [ playing, setPlaying ] = useState(false);
    
    const soundLength = soundRef.current?.duration ?? 0;

    return <button 
        className={cn(classes.button, {
            [classes.primary]: primary,
            [classes.secondary]: secondary,
            [classes.small]: small,
        })}
        onClick={() => {
            if (onClick) onClick();
            if (playable) {
                soundRef.current && (soundRef.current.currentTime = 0);
                playing 
                    ? soundRef.current?.pause() 
                    : soundRef.current?.play();
            }
        }}
    >
        {sound && <audio src={sound} ref={soundRef} 
            onPause={() => setPlaying(false)}
            onPlay={ () => setPlaying(true)} 
        />}
        {playable && <div className={cn(classes.playhead, {
            [classes.playing]: playing,
        })} style={{
            animationDuration: `${soundLength}s`,
        }} />}

        {icon && <Image src={playing ? iconStop! : icon!} alt="Icon" width={16} height={16} className={classes.icon} />}
        <span>{children}</span>
    </button>;
};

export default Button;
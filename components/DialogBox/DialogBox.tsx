'use client';

import classes from './DialogBox.module.scss';

import { useRef } from 'react';
import { motion } from 'motion/react';
import cn from 'classnames';

type DialogBoxProps = {
    children: React.ReactNode;
    onClose?: () => void;
};

const DialogBox = ({ children, onClose }: DialogBoxProps) => {
    const dialogRef = useRef<HTMLDivElement>(null);

    return <motion.div className={classes.dialogWrap} ref={dialogRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <motion.div className={cn(classes.dialog, {
                [classes.open]: true,
            })}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
        >
            <div className={classes.close} onClick={() => {
                onClose?.();
            }} />
            <div className={classes.content}>
                {children}
            </div>
        </motion.div>
        <div className={classes.overlay} onClick={() => onClose?.()} />
    </motion.div>;
};

export default DialogBox;
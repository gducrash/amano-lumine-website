'use client';

import classes from './UnorderedList.module.scss';

type UnorderedListProps = {
    children: React.ReactNode[];
};

const UnorderedList = ({ 
    children,
}: UnorderedListProps) => {
    return <ul className={classes.list}>
        { children.map((child, i) => <li key={i}>
            <div className="star" style={{ opacity: 1 - (i*0.07) }} />
            {child}
        </li>) }
    </ul>;
};

export default UnorderedList;
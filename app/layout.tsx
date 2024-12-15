import type { Metadata } from 'next';
import './globals.scss';
import Link from 'next/link';
import { src } from '@/util/functions';

export const metadata: Metadata = {
    title: 'Amano Lumine',
    description: 'UTAU voicebank by astrasuz*◇',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>

                <link rel="icon" href={src('/favicon.ico')} sizes="any" />
            </head>
            <body>
                <div className="content">
                    <header className="menuList">
                        <ul>
                            <li><Link href="/">Home</Link></li> |
                            <li><Link href="/download">Download</Link></li> |
                            <li><Link href="/character">Character</Link></li> |
                            <li><Link href="/songs">Songs</Link></li> |
                            <li><Link href="/resources">Resources</Link></li> |
                            <li className='unavailable'>Next</li>
                        </ul>
                    </header>

                    {children}

                    <footer className="menuList">
                        <ul>
                            <li>
                                <a href="https://www.youtube.com/@astrasuz" target="_blank" rel="noopener noreferrer">
                                © astrasuz*◇ 2024
                                </a>
                            </li> | 
                            <li>
                                <a href="https://ucrash.neocities.org/" target="_blank" rel="noopener noreferrer">
                                Website by Ucrash :)
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </body>
        </html>
    );
}

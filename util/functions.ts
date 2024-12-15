export function src (path: string) {
    return `/${process.env.NEXT_PUBLIC_BASE_PATH}${path}`;
}

export function platformName (platform: 
    | 'youtube'
    | 'ytmusic'
    | 'soundcloud'
    | 'bandcamp'
    | 'spotify'
    | 'other'
) {
    switch (platform) {
        case 'youtube':
            return 'YouTube';
        case 'ytmusic':
            return 'YouTube Music';
        case 'soundcloud':
            return 'SoundCloud';
        case 'bandcamp':
            return 'Bandcamp';
        case 'spotify':
            return 'Spotify';
        case 'other':
            return 'Other';
        default:
            return 'Unknown';
    }
}
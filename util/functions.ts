export function src (path: string) {
    return `/${process.env.NEXT_PUBLIC_BASE_PATH}${path}`;
}
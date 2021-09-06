export const get = (a: string) => (k: string): any => {
    switch (a) {
        case "local":
            return localStorage.getItem(k);
        case "session":
            return sessionStorage.getItem(k);
        default:
            return null;
    }
}


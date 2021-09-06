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

export const set = (a: string) => (k: string) => (v: any): void => {
    switch (a) {
        case "local":
            localStorage.setItem(k, v);
            break
        case "session":
            sessionStorage.setItem(k, v);
            break
        default:
            sessionStorage.setItem(k, v);
    }
}


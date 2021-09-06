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

export const lGet: (k: string) => any = get("local");
export const sGet: (k: string) => any = get("session");
export const lSet: (k: string) => (v: any) => void = set("local");
export const sSet: (k: string) => (v: any) => void = set("session");

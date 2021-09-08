export type NNA = Array<Array<number>>;
export type morph = (matrix: NNA) => NNA;

export type CheckFn = (moves: number, cond: boolean) => Status;
export type StatusFn = (level: number, moves: number) => Status;

export enum Status {
    CLEAR = "CLEAR",
    FAIL = "FAIL",
    ALIVE = "ALIVE",
    ERROR = "ERROR",
}

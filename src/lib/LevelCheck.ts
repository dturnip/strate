import {Status, CheckFn, StatusFn} from "../types/aliases";
import {sSet, sGet} from "./Storage";

const check: CheckFn = (moves, cond) => {
    const currStatus: string = sGet("currStatus");
    if (moves > 0 && cond) {
        sSet("currStatus")(Status.CLEAR);
        return Status.CLEAR;
    } else if (moves > 0 && !cond) {
        sSet("currStatus")(Status.ALIVE);
        return Status.ALIVE;
    } else if (moves <= 0 && cond && currStatus === Status.ALIVE) {
        sSet("currStatus")(Status.CLEAR);
        return Status.CLEAR;
    } else if (moves <= 0 && !cond) {
        sSet("currStatus")(Status.FAIL);
        return Status.FAIL;
    } else {
        alert("Oops there was an Error");
        return Status.ERROR;
    }
}


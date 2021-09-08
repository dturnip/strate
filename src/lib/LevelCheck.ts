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

export const objectiveCheck: StatusFn = (level, moves) => {
    const currMatrix: string = sGet("currMatrix");
    const currStatus: string = sGet("currStatus");
    switch (currStatus) {
        case Status.CLEAR:
            return Status.CLEAR;
        case Status.FAIL:
            return Status.FAIL;
        case Status.ERROR:
            console.log("Oops there was an Error");
            alert("ERROR");
            return Status.ERROR;
        case Status.ALIVE:
            switch (level) {
                case 0:
                    // Objective: Get the 8 tile
                    return check(moves, currMatrix.includes("8"));
                case 1:
                    // Objective: Get the 16 tile
                    return check(moves, currMatrix.includes("16"));
                default:
                    console.log("Oops there was an Error");
                    alert("Oops there was an Error");
                    return Status.ERROR;
            }
        default:
            console.log("Oops there was an Error");
            alert("Oops there was an Error");
            return Status.ERROR;
    }
}

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
                case 2:
                    // Objective: Merge all tiles (16)
                    return check(moves, currMatrix.includes("16"));
                case 3:
                    // Objective: Get the 64 tile
                    return check(moves, currMatrix.includes("64"));
                case 4:
                    // Objective: Merge all tiles (32)
                    return check(moves, currMatrix.includes("32"));
                case 5:
                    // Objective: Remove all 2 tiles
                    return check(moves, !currMatrix.includes("2"));
                case 6:
                    // Objective: Get the 64 tile
                    return check(moves, currMatrix.includes("64"));
                case 7:
                    // Objective: Remove all tiles under 8
                    return check(moves, !currMatrix.includes("2") && !currMatrix.includes("4"));
                case 8:
                    // Objective: Get the 64 tile
                    return check(moves, currMatrix.includes("64"));
                case 9:
                    // Objective: Merge all tiles (128)
                    return check(moves, currMatrix.includes("128"));
                case 10:
                    // Objective: Get over 300 points
                    return check(moves, parseInt(sGet("points"), 10) > 300);
                case 11:
                    // Objective: Get over 500 points
                    return check(moves, parseInt(sGet("points"), 10) > 500);
                case 12:
                    return check(moves, !currMatrix.includes("32"));
                case 13:
                    return check(moves, !currMatrix.includes("2") && parseInt(sGet("points"), 10) > 100);
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

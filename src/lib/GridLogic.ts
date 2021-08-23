const gridN: number = 8;

export const newEmptyGrid = (): Array<Array<number>> => {
    let grid: Array<Array<number>> = [];
    for (let r = 0; r < gridN; r++) {
        grid.push([]);
        for (let c = 0; c < gridN; c++) {
            grid[r].push(0);
        }
    }
    return grid;
}

export const hasValue = (grid: Array<Array<number>>, v: number): boolean => {
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === v) return true;
        }
    }
    return false;
}


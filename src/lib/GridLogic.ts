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

export const gridIsFull = (grid: Array<Array<number>>): boolean => {
    return !hasValue(grid, 0);
}

export const compressGrid = (grid: Array<Array<number>>): Array<Array<number>> => {
    const newGrid: Array<Array<number>> = newEmptyGrid();
    for (let r = 0; r < grid.length; r++) {
        let cidx: number = 0;
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] !== 0) {
                newGrid[r][cidx] = grid[r][c];
                cidx++;
            }
        }
    }
    return newGrid;
}

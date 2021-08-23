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

export const mergeGrid = (grid: Array<Array<number>>): Array<Array<number>> => {
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length - 1; c++) {
            if (grid[r][c] !== 0 && grid[r][c] === grid[r][c + 1]) {
                grid[r][c] = grid[r][c] * 2;
                grid[r][c + 1] = 0;
            }
        }
    }
    return grid;
}

export const reverseGrid = (grid: Array<Array<number>>): Array<Array<number>> => {
    const newGrid: Array<Array<number>> = newEmptyGrid();
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            newGrid[r][c] = grid[r][grid[r].length - c - 1];
        }
    }
    return newGrid;
}

export const rotateGridAnticlockwise = (grid: Array<Array<number>>): Array<Array<number>> => {
    const newGrid: Array<Array<number>> = newEmptyGrid();
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            newGrid[r][c] = grid[c][grid[r].length - r - 1];
        }
    }
    return newGrid;
}

export const rotateGridClockwise = (grid: Array<Array<number>>): Array<Array<number>> => {
    const newGrid: Array<Array<number>> = newEmptyGrid();
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            newGrid[r][c] = grid[grid[r].length - c - 1][r];
        }
    }
    return newGrid;
}

export const morphLeft = (grid: Array<Array<number>>): Array<Array<number>> => {
    const compressedGrid: Array<Array<number>> = compressGrid(grid);
    const mergedGrid: Array<Array<number>> = mergeGrid(compressedGrid);
    return compressGrid(mergedGrid);
}

export const morphRight = (grid: Array<Array<number>>): Array<Array<number>> => {
    const reversedGrid: Array<Array<number>> = reverseGrid(grid);
    const shiftedGrid: Array<Array<number>> = morphLeft(reversedGrid);
    return reverseGrid(shiftedGrid);
}

export const morphUp = (grid: Array<Array<number>>): Array<Array<number>> => {
    const rotatedAnticlockwiseGrid: Array<Array<number>> = rotateGridAnticlockwise(grid);
    const shiftedGrid: Array<Array<number>> = morphLeft(rotatedAnticlockwiseGrid);
    return rotateGridClockwise(shiftedGrid);
}


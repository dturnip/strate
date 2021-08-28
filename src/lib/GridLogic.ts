import { NNA } from '../types/aliases';
const gridN: number = 8;

export const newEmptyGrid = (): NNA => {
    let grid: NNA = [];
    for (let r = 0; r < gridN; r++) {
        grid.push([]);
        for (let c = 0; c < gridN; c++) {
            grid[r].push(0);
        }
    }
    return grid;
}

export const hasValue = (grid: NNA, v: number): boolean => {
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === v) return true;
        }
    }
    return false;
}

export const gridIsFull = (grid: NNA): boolean => {
    return !hasValue(grid, 0);
}

export const compressGrid = (grid: NNA): NNA => {
    const newGrid: NNA = newEmptyGrid();
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

export const mergeGrid = (grid: NNA): NNA => {
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

export const reverseGrid = (grid: NNA): NNA => {
    const newGrid: NNA = newEmptyGrid();
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            newGrid[r][c] = grid[r][grid[r].length - c - 1];
        }
    }
    return newGrid;
}

export const rotateGridAnticlockwise = (grid: NNA): NNA => {
    const newGrid: NNA = newEmptyGrid();
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            newGrid[r][c] = grid[c][grid[r].length - r - 1];
        }
    }
    return newGrid;
}

export const rotateGridClockwise = (grid: NNA): NNA => {
    const newGrid: NNA = newEmptyGrid();
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            newGrid[r][c] = grid[grid[r].length - c - 1][r];
        }
    }
    return newGrid;
}

export const morphLeft = (grid: NNA): NNA => {
    const compressedGrid: NNA = compressGrid(grid);
    const mergedGrid: NNA = mergeGrid(compressedGrid);
    return compressGrid(mergedGrid);
}

export const morphRight = (grid: NNA): NNA => {
    const reversedGrid: NNA = reverseGrid(grid);
    const shiftedGrid: NNA = morphLeft(reversedGrid);
    return reverseGrid(shiftedGrid);
}

export const morphUp = (grid: NNA): NNA => {
    const rotatedAnticlockwiseGrid: NNA = rotateGridAnticlockwise(grid);
    const shiftedGrid: NNA = morphLeft(rotatedAnticlockwiseGrid);
    return rotateGridClockwise(shiftedGrid);
}

export const morphDown = (grid: NNA): NNA => {
    const rotatedClockWiseGrid: NNA = rotateGridClockwise(grid);
    const shiftedGrid: NNA = morphLeft(rotatedClockWiseGrid);
    return rotateGridAnticlockwise(shiftedGrid);
}

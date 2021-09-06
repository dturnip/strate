import {NNA} from "../types/aliases";
import {lGet, sGet, lSet, sSet} from "./Storage";

/**
 * Returns a matrix with its columns as rows
 * @param {NNA} matrix - Matrix to transform
 * @returns {NNA} Transformed matrix
 */
const transposeToColumns = (matrix: NNA): NNA => {
    let cols: NNA = [];
    for (let r = 0; r < matrix.length; r++) {
        let col: Array<number> = [];
        for (let c = 0; c < matrix.length; c++) {
            col.push(matrix[c][r]);
        }
        cols.push(col);
    }
    return cols;
}

const transposeToRows = (matrix: NNA): NNA => {
    return transposeToColumns(matrix);
}

/**
 * Returns a matrix with the truthy values compressed to the right and the falseys shifted to the left
 * @param {NNA} matrix - Matrix to compress
 * @returns {NNA} Compressed matrix
 */
const compressRight = (matrix: NNA): NNA => {
    let ret: NNA = [];
    for (let r = 0; r < matrix.length; r++) {
        let filtered: Array<number> = matrix[r].filter(v => v);
        let shiftct: Array<number> = Array(matrix[r].length - filtered.length).fill(0);
        ret.push(shiftct.concat(filtered));
    }
    return ret;
}

/**
 * Returns a matrix with the truthy values compressed to the left and the falseys shifted to the right
 * @param {NNA} matrix - Matrix to compress
 * @returns {NNA} Compressed matrix
 */
const compressLeft = (matrix: NNA): NNA => {
    let ret: NNA = [];
    for (let r = 0; r < matrix.length; r++) {
        let filtered: Array<number> = matrix[r].filter(v => v);
        let shiftct: Array<number> = Array(matrix[r].length - filtered.length).fill(0);
        ret.push(filtered.concat(shiftct));
    }

    return ret;
}

/**
 * Returns a transformed matrix with its truthy values compressed to the left
 * @param {NNA} matrix - Matrix to compress
 * @returns {NNA} Transformed compressed matrix
 */
const compressUp = (matrix: NNA): NNA => {
    let transform: NNA = transposeToColumns(matrix);
    return compressLeft(transform);
}

/**
 * Returns a transformed matrix with its truthy values compressed to the right
 * @param {NNA} matrix - Matrix to compress
 * @returns {NNA} Transformed compressed matrix
 */
const compressDown = (matrix: NNA): NNA => {
    let transform: NNA = transposeToColumns(matrix);
    return compressRight(transform);
}

/**
 * Returns a matrix with the values on the x-axis merged once
 * @param {NNA} matrix - Matrix to merge
 * @returns {NNA} Merged matrix
 */
const mergeX = (matrix: NNA): NNA => {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (c === matrix[r].length - 1) {
                continue;
            }
            if (matrix[r][c] === matrix[r][c + 1]) {
                matrix[r][c] = matrix[r][c] + matrix[r][c + 1];
                matrix[r][c + 1] = 0;
                sSet("points")(
                    parseInt(sGet("points") || 0, 10) + matrix[r][c]
                );
            }
        }
    }
    return matrix;
}

/**
 * Returns a transformed matrix with the values on the y-axis merged once
 * @param {NNA} matrix - Matrix to merge
 * @returns {NNA} Merged matrix
 */
const mergeY = (matrix: NNA): NNA => {
    return transposeToRows(mergeX(matrix));
}

// Handling movement is compress -> merge -> compress

export const morphRight = (matrix: NNA): NNA => {
    return compressRight(mergeX(compressRight(matrix)));
}

export const morphLeft = (matrix: NNA): NNA => {
    return compressLeft(mergeX(compressLeft(matrix)));
};

export const morphUp = (matrix: NNA): NNA => {
    return transposeToRows(compressUp(mergeY(compressUp(matrix))));
}

export const morphDown = (matrix: NNA): NNA => {
    return transposeToRows(compressDown(mergeY(compressDown(matrix))));
}

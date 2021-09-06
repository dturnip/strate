import { NNA } from "../types/aliases";
import maps from "../data/maps.json";
import { Maps } from "../types/interfaces";

const retErrMap = (): NNA => {
	return [...Array(8)].map(_ => Array(8).fill(2));
}

export const getAllMaps = (): Maps | null => {
	return maps;
}

export const getMap = (map: number): NNA => {
	const maps = getAllMaps();
	if (maps === null) return retErrMap();
	return maps[map];
}


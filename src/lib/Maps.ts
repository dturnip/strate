import { NNA } from "../types/aliases";
import maps from "../data/maps.json";
import meta from "../data/meta.json";
import { Maps, Metas, Meta } from "../types/interfaces";

const retErrMap = (): NNA => {
	return [...Array(8)].map(_ => Array(8).fill(2));
}

const getAllMaps = (): Maps | null => {
	return maps;
}

const getAllMeta = (): Metas | null => {
	return meta;
}

export const getMap = (map: number): NNA => {
	const maps = getAllMaps();
	if (maps === null) return retErrMap();
	return maps[map];
}

export const getMeta: ((map: number) => Meta) = (map) => {
    const meta = getAllMeta();
    if (meta === null) return { objective: "Error", moves: 0 };
    return meta[map];
}

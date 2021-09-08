export interface GameCell {
    n: number;
}

export interface Maps {
	[key: string]: Array<Array<number>>;
}

export interface GameBoardProps {
	map: number;
	retry: boolean;
}

export interface SideProps {
	points: string;
	objective: string;
	moves: string;
}

export interface SideButtonProps {
	construct: string;
	data: string;
}

export interface Meta {
	objective: string;
	moves: number;
}

export interface Metas {
	[key: string]: Meta
}

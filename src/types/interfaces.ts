export interface GameCell {
    n: number;
}

export interface Maps {
	[key: string]: Array<Array<number>>;
}

export interface GameBoardProps {
	map: Array<Array<number>>;
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

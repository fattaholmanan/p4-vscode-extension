export interface P4Settings {
	maxNumberOfProblems: number;
	includePaths: string[];
}

export const defaultSettings: P4Settings = {
	maxNumberOfProblems: 100,
	includePaths: [],
};

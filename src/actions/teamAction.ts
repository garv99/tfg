
export const SAVE_TEAM_A = 'SAVE_TEAM_A';
export const SAVE_TEAM_B = 'SAVE_TEAM_B';

export interface SaveTeamAction {
    type: typeof SAVE_TEAM_A | typeof SAVE_TEAM_B;
    payload: {
        name: string;
        image: any;
    };
}

export const saveTeamA = (name: string, image: any): SaveTeamAction => ({
    type: SAVE_TEAM_A,
    payload: { name, image },
});

export const saveTeamB = (name: string, image: any): SaveTeamAction => ({
    type: SAVE_TEAM_B,
    payload: { name, image },
});

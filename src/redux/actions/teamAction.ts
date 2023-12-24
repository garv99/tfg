
export const SAVE_TEAM_A = 'SAVE_TEAM_A';
export const SAVE_TEAM_B = 'SAVE_TEAM_B';
export const CLEAR_TEAMS = 'CLEAR_TEAMS';

export interface SaveTeamAction {
    type: typeof SAVE_TEAM_A | typeof SAVE_TEAM_B;
    payload: {
        name: string;
        image: any;
    };
}

export interface ClearTeamsAction {
    type: typeof CLEAR_TEAMS;
}

export const saveTeamA = (name: string, image: any): SaveTeamAction => ({
    type: SAVE_TEAM_A,
    payload: { name, image },
});

export const saveTeamB = (name: string, image: any): SaveTeamAction => ({
    type: SAVE_TEAM_B,
    payload: { name, image },
});

export const clearTeams = (): ClearTeamsAction => ({
    type: CLEAR_TEAMS
});
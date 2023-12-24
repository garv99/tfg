export const ADD_MATCH = 'ADD_MATCH';
export const REMOVE_MATCH = 'REMOVE_MATCH';

export interface Match {
    id: any;
    city: string;
    ground: string;
    date: string;
    time_slot: string;
    team_A_name: string;
    team_B_name: string;
}

interface AddMatchAction {
    type: typeof ADD_MATCH;
    payload: Match;
}

interface RemoveMatchAction {
    type: typeof REMOVE_MATCH;
    payload: string; // match id
}

export type MatchesActionTypes = AddMatchAction | RemoveMatchAction;

export const addMatch = (match: Match): AddMatchAction => ({
    type: ADD_MATCH,
    payload: match,
});

export const removeMatch = (matchId: string): RemoveMatchAction => ({
    type: REMOVE_MATCH,
    payload: matchId,
});

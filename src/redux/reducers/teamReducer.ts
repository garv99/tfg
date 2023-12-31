import { CLEAR_TEAMS, SAVE_TEAM_A, SAVE_TEAM_B, clearTeams, saveTeamA, saveTeamB } from "../actions/teamAction";

export interface TeamState {
    teamA: {
        name: string;
        image: any;
    };
    teamB: {
        name: string;
        image: any;
    };
}

const initialState: TeamState = {
    teamA: {
        name: '',
        image: '',
    },
    teamB: {
        name: '',
        image: '',
    },
};

type TeamActionTypes = ReturnType<typeof saveTeamA | typeof saveTeamB | typeof clearTeams>;

const teamReducer = (state = initialState, action: TeamActionTypes): any => {
    switch (action.type) {
        case SAVE_TEAM_A:
            return {
                ...state,
                teamA: {
                    name: action.payload.name,
                    image: action.payload.image,
                },
            };
        case SAVE_TEAM_B:
            return {
                ...state,
                teamB: {
                    name: action.payload.name,
                    image: action.payload.image,
                },
            };
        case CLEAR_TEAMS:
            return { ...initialState, };
        default:
            return state;
    }
};

export default teamReducer;

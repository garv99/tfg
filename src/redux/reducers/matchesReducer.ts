import { ADD_MATCH, Match, MatchesActionTypes, REMOVE_MATCH } from "../actions/MatchesAction";


interface MatchState {
    matches: Match[];
}

const initialState: MatchState = {
    matches: [],
};

const matchesReducer = (state = initialState, action: MatchesActionTypes): MatchState => {
    switch (action.type) {
        case ADD_MATCH:
            return {
                ...state,
                matches: [...state.matches, action.payload],
            };

        case REMOVE_MATCH:
            return {
                ...state,
                matches: state.matches.filter((match) => match.id !== action.payload),
            };

        default:
            return state;
    }
};

export default matchesReducer;

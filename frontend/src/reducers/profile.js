const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {},
    checkR: false,
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_PROFILE':
            return {
                ...state,
                profile: payload,
                loading: false,
                checkR: false
            }
        case 'UPDATE_PROFILE':
            return {
                ...state,
                profile: payload,
                loading: false,
                checkR: true
            };
        case 'PROFILE_ERROR':
            return {
                ...state,
                error: payload,
                loading: false,
                profile: null
            };
        default:
            return state;
    }
}
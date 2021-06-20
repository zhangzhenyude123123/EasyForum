const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_PROFILE':
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case 'UPDATE_PROFILE':
            return {
                ...state,
                profile: payload,
                loading: false
            };
        case 'GET_PROFILES':
            return {
                ...state,
                profiles: payload,
                loading: false
            };
        case 'PROFILE_ERROR':
            return {
                ...state,
                error: payload,
                loading: false,
                profile: null
            };
        case 'GET_REPOS':
            return {
                ...state,
                repos: payload,
                loading: false
            };
        default:
            return state;
    }
}
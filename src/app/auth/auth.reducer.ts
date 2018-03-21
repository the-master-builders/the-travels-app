import { AuthActions, AUTHENTICATED, UNAUTHENTICATED } from './auth.actions';

export interface State {
    isAuthenticated: boolean;
}

const initialState: State = {
    isAuthenticated: false
};

export function authReducer(state = initialState, action: AuthActions) {
    switch (action.type) {
        case AUTHENTICATED:
            return {
                isAuthenticated: true
            };
        case UNAUTHENTICATED:
            return {
                isAuthenticated: false
            };
        default:
            return state;
    }
}
export const getIsAuthenticated = (state: State) => state.isAuthenticated;

import { Action } from '@ngrx/store';

export const AUTHENTICATED = '[Auth] Authenticated';
export const UNAUTHENTICATED = '[Auth] UnAuthenticated';

export class SetAuthenticated implements Action {
    readonly type = AUTHENTICATED;
}

export class SetUnauthenticated implements Action {
    readonly type = UNAUTHENTICATED;
}

export type AuthActions = SetAuthenticated | SetUnauthenticated;

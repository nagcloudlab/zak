
import { Action, createReducer, on } from '@ngrx/store';
import { down, up } from './voting.actions';

const initialState = {}

export const votingLinesReducer = createReducer(
    initialState,
    on(up, (state, action) => ({ ...state, [action.name]: action.votingLine })),
    on(down, (state, action) => ({ ...state, [action.name]: action.votingLine })),
);
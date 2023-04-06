

import { createAction, props } from '@ngrx/store';

export const up = createAction(
    'UP',
    props<{ name: string; votingLine: any }>()
);
export const down = createAction(
    'DOWN',
    props<{ name: string; votingLine: any }>()
);
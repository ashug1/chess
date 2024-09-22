import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userDetailsReducer from '../reducers/userDetails';
export const store = configureStore({
    reducer: {
        userDetail: userDetailsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import {} from '../actions/userDetails';

export interface userDetailsState {
    status: 'idle' | 'loading' | 'failed';
    ConvertedNumber: any;
}

const initialState: userDetailsState = {
    status: 'idle',
    ConvertedNumber: '',
};

export const userDetailsReducer = createSlice({
    name: 'userDetails',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        isSDSLoader: (state, action: PayloadAction<boolean>) => { },
    },
    extraReducers: (builder) => {},
});


export const ConvertedNumberData = (state: RootState) =>
    state.userDetail.ConvertedNumber;
export default userDetailsReducer.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStore } from 'store';

interface CurrentUserState {
  name?: string,
}

const initialState: CurrentUserState = {}

const currentUserSlice = createSlice({
  name: 'current_user',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) { state.name = action.payload },
    clearName(state) { delete state.name },
  },
});

export const getName = (store: IStore) => store.current_user.name;
export const { setName, clearName } = currentUserSlice.actions;
export const current_user = currentUserSlice.reducer;

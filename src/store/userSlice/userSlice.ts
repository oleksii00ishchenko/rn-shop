import {createSlice} from '@reduxjs/toolkit';
import {UserState} from './types';

const initialState: UserState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const {setIsAuthenticated} = userSlice.actions;
export default userSlice.reducer;

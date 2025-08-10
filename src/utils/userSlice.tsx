import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  uid: string | null;
  displayName: string | null;
  email: string | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  uid: null,
  displayName: null,
  email: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (_state, action: PayloadAction<UserState>) => {
      return {
        ...action.payload,
        isAuthenticated: true,
      };
    },
    removeUser: () => {
      return initialState;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

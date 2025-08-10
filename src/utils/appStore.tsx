import { configureStore } from '@reduxjs/toolkit';
import userReduce from './userSlice';

const appStore = configureStore({
  reducer: {
    user: userReduce,
  },
});
export type RootState = ReturnType<typeof appStore.getState>;
export default appStore;

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gameReducer from 'features/gameSlice';

export const store = configureStore({
  reducer: gameReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

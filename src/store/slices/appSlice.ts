import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isInitialized: boolean;
  bootTime: string;
  userInteractions: number;
}

const initialState: AppState = {
  isInitialized: false,
  bootTime: '',
  userInteractions: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initializeApp: (state, action: PayloadAction<string>) => {
      state.isInitialized = true;
      state.bootTime = action.payload;
    },
    incrementUserInteractions: (state) => {
      console.log('Incrementing user interactions', state);
      state.userInteractions += 1;
    },
    resetApp: (state) => {
      state.isInitialized = false;
      state.bootTime = '';
      state.userInteractions = 0;
    },
  },
});

export const { initializeApp, incrementUserInteractions, resetApp } = appSlice.actions;
export default appSlice.reducer;
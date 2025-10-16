import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
import { rozeniteDevToolsEnhancer } from '@rozenite/redux-devtools-plugin';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(rozeniteDevToolsEnhancer()),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
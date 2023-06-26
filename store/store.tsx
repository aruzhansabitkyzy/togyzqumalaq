'use client';
import { configureStore } from '@reduxjs/toolkit'
import  settingsSlice  from './reducers/settingsSlice'
import {useSelector , TypedUseSelectorHook} from 'react-redux';

// config the store 
export const store= configureStore({
   reducer: {
     settings: settingsSlice
   }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
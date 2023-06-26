'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
    settings: SettingsState;
}

type SettingsState = {
    theme: string,
    language: string
}

const initialState = {
    settings: {
        theme: "dark",
        language: "english"
    } as SettingsState
} as InitialState

const settingsSlice= createSlice({
    name:"settings",
    initialState:initialState,
    reducers:{
         changeTheme : (state, action:PayloadAction<string>) => {
             state.settings.theme=action.payload;
         },
         changeLanguage: (state, action:PayloadAction<string>) => {
            state.settings.language=action.payload;
         }
     }
})

export const {changeTheme, changeLanguage} = settingsSlice.actions;
export default settingsSlice.reducer;
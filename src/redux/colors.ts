import { createSlice } from "@reduxjs/toolkit";

const ui = createSlice({
  name: "colors",
  initialState: {
    offset: 0,
    id: 0,
    density: 20, // 0.05 - 20
    densitySlidebar: 100, // 0-100
  },
  reducers: {
    setColorId: (state, action) => ({ ...state, id: action.payload }),
    setOffset: (state, action) => ({ ...state, offset: action.payload }),
    setDensity: (state, action) => ({ ...state, density: action.payload }),
  },
});

export const { reducer, actions } = ui;
export const { setOffset, setColorId, setDensity } = actions;

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit"

type UserState = {
  usedCoin: number
}

const initialState: UserState = {
  usedCoin: 0,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsedCoin: (state, action: PayloadAction<number | null | undefined>) => {
      state.usedCoin = action.payload ?? 0
    },
  },
})

export const { setUsedCoin } = userSlice.actions
export default userSlice.reducer

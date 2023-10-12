import { createSlice, current } from "@reduxjs/toolkit";

const options = {
  name: "cards",
  initialState: { cards: {} },
  reducers: {
    addCard: (state, action) => {
      state.cards[action.payload.id] = {
        id: action.payload.id,
        front: action.payload.front,
        back: action.payload.back,
      };
    },
  },
};

export const selectCards = (state) => state.cards.cards;
export const cardsSlice = createSlice(options);
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;

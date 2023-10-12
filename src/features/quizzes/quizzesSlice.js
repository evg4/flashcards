import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "quizzes",
  initialState: { quizzes: {} },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = {
        id: action.payload.id,
        topicId: action.payload.topicId,
        name: action.payload.name,
        cardIds: action.payload.cardIds,
      };
    },
  },
};

export const selectQuizzes = (state) => state.quizzes.quizzes;

const quizzesSlice = createSlice(options);
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

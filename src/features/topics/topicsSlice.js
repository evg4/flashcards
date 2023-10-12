import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

const options = {
  name: "topics",
  initialState: { topics: {} },
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = {
        id: action.payload.id,
        name: action.payload.name,
        icon: action.payload.icon,
        quizIds: [],
      };
    },
  },
  extraReducers: {
    [addQuiz]: (state, action) => {
      for (const topic in state.topics) {
        if (action.payload.topicId === topic) {
          state.topics[action.payload.topicId].quizIds.push(action.payload.id);
        }
      }
    },
  },
};

export const selectTopics = (state) => state.topics.topics;

const topicsSlice = createSlice(options);
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;

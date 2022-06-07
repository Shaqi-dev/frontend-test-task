import { createSlice } from '@reduxjs/toolkit';
import news from '../db/news';

const initialState = news.slice(0, 4);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNews: (state, action) => {
      state.push(
        {
          id: state[state.length - 1].id + 1,
          title: action.payload.title,
          description: action.payload.description,
          image: action.payload.image,
          authorId: action.payload.authorId,
          datePosted: action.payload.datePosted,
          isApproved: action.payload.isApproved,
        },
      );
    },
    setApprove: (state, action) => {
      const newsToChange = state.find((newsItem) => newsItem.id === action.payload.id);
      newsToChange.isApproved = action.payload.isApproved;
    },
  },
});

const { reducer } = newsSlice;

export const { addNews, setApprove } = newsSlice.actions;

export const newsSelector = (state) => state.news;

export default reducer;

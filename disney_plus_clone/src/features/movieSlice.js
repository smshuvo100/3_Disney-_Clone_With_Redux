import { createSlice } from "@reduxjs/toolkit";
/* 
<Recommends />
      <NewDisney />
      <Originals />
      <Trending />
*/
const initialState = {
  recommends: null,
  newDisney: null,
  originals: null,
  trending: null,
};
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setMovies: (state, action) => {
      state.recommends = action.payload.recommends;
      state.newDisney = action.payload.newDisney;
      state.originals = action.payload.originals;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommends = (state) => state.movie.recommends;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginals = (state) => state.movie.originals;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;

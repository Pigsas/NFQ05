import { combineReducers } from 'redux';

const initialState = {
  showCards: true,
};

const componentState = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleCards': return {
      ...state,
      showCards: action.shouldShow,
    };
    default: return state;
  }
};

const initialStateOfCards = {
  mostPopular: [],
};

const cards = (state = initialStateOfCards, action) => {
  switch (action.type) {
    case 'setMostPopularMovies': return {
      ...state,
      mostPopular: action.list,
    };
    default: return state;
  }
};

const initialStateOfMeniu = {
  meniuItems: [],
};

const meniu = (state = initialStateOfMeniu, action) => {
  switch (action.type) {
    case 'setMeniu': return {
      ...state,
      meniuItems: action.list,
    };
    default: return state;
  }
};

const initialStateOfGenre = {
  moviesByGenre: [],
  toogledGenre: '',
};

const genre = (state = initialStateOfGenre, action) => {
  switch (action.type) {
    case 'setGenre': return {
      ...state,
      moviesByGenre: action.list,
      toogledGenre: action.idGenre,
    };
    default: return state;
  }
};

const initialStateOfHeart = {
  hearted: [],
};

const heart = (state = initialStateOfHeart, action) => {
  switch (action.type) {
    case 'setHearts': return {
      ...state,
      hearted: action.list,
    };
    default: return state;
  }
};

const initialStateOfDescription = {
  toggleDescription: false,
};

const description = (state = initialStateOfDescription, action) => {
  switch (action.type) {
    case 'toggleDescription': return {
      ...state,
      toggleDescription: action.shouldShow,
    };
    default: return state;
  }
};

const initialStateOfLogs = {
  logs: [],
};

const log = (state = initialStateOfLogs, action) => {
  switch (action.type) {
    case 'addLog': return {
      ...state,
      logs: action.text,
    };
    default: return state;
  }
};


export const rootReducer = combineReducers({
  componentState,
  cards,
  meniu,
  genre,
  heart,
  description,
  log,
});

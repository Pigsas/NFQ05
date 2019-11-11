export const toggleCards = (shouldShow) => ({
  type: 'toggleCards',
  shouldShow,
});

export const setMostPopularMovies = (list) => ({
  type: 'setMostPopularMovies',
  list,
});

export const setMeniu = (list) => ({
  type: 'setMeniu',
  list,
});

export const setGenre = (list, idGenre) => ({
  type: 'setGenre',
  list,
  idGenre,
});

export const setHearts = (list) => ({
  type: 'setHearts',
  list,
});

export const toggleDescription = (shouldShow) => ({
  type: 'toggleDescription',
  shouldShow,
});

export const addLog = (text) => ({
  type: 'addLog',
  text,
});


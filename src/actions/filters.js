// SET_SELECT_SPORT
export const setSelectSport = (filters) => ({
    type: 'SET_SELECT_SPORT',
    filters
});

// SET_HOME_SCORE
export const setHomeScore = (homeTeamScore = '') => ({
    type: 'SET_HOME_SCORE',
    homeTeamScore
});

// SET_AWAY_SCORE
export const setAwayScore = (awayTeamScore = '') => ({
    type: 'SET_AWAY_SCORE',
    awayTeamScore
});

// SET_MINUTES
export const setMinutes = (minutes, seconds) => ({
    type: 'SET_MINUTES',
    minutes,
    seconds
});

// SET_SECONDS
export const setSeconds = (seconds) => ({
    type: 'SET_SECONDS',
    seconds
});

// SET_PERIOD_WORD
export const periodWordsHandler = (period) => ({
    type: 'SET_PERIOD_WORD',
    period
});

// // GET_PERIODS
// export const GetPeriods = (period) => ({
//     type: 'GET_PERIODS',
//     period
// });

// SET_PERIOD_SELECTION
export const setPeriodSelection = (currentPeriod) => ({
    type: 'SET_PERIOD_SELECTION',
    currentPeriod
});
 
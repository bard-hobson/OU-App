
const filtersReducerDefaultState = {
        homeTeamScore: 0,
        awayTeamScore: 0,
        sportListSelection: null,
        period: '',
        gameSections: '',
        currentPeriod: null,
        maxPeriods: 4,
        periodMax: 900, //all minutes are saved to seconds to make calculations easier later
        minutes: null,
        seconds: null
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SELECT_SPORT':
            return {                 
                ...state,
                ...action.filters
            }
        case 'SET_HOME_SCORE':
            return {                 
                ...state,
                homeTeamScore: action.homeTeamScore
            }
        case 'SET_AWAY_SCORE':
            return {                 
                ...state,
                awayTeamScore: action.awayTeamScore
            }
        case 'SET_MINUTES':
            return {                 
                ...state,
                minutes: action.minutes,
                seconds: action.seconds
            }
        case 'SET_SECONDS':
            return {                 
                ...state,
                seconds: action.seconds
            }
        case 'SET_PERIOD_WORD':
            return {                 
                ...state,
                period: action.period
            } 
        case 'SET_PERIOD_SELECTION':
            return {                 
                ...state,
                currentPeriod: action.currentPeriod
            }      
        default: 
            return state;
    }
};

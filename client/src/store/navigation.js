import { combineReducers } from 'redux';
import creator from 'common/creator';

const SET_PAGE = 'nav/SET_PAGE';

export const action = {
	setPage: creator.action.callable(SET_PAGE)
};

export const reducer = combineReducers({
	page: creator.reducer.fromObject({
		[SET_PAGE]: (state, action) => {
			return action.payload;
		}
	}, window.location.pathname)
});

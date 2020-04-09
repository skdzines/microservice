import { combineReducers } from 'redux';
import creator from 'common/creator';
import axios from 'axios';

const GET_USER = 'api/GET_USER';
const CREATE_USER = 'api/CREATE_USER';
const EDIT_USER = 'api/EDIT_USER';
const DELETE_USER = 'api/DELETE_USER';
const USER_SUCCESS = 'api/USER_SUCCESS';

export const action = {
    get: creator.action.callable(GET_USER),
    create: creator.action.callable(CREATE_USER),
    edit: creator.action.callable(EDIT_USER),
    delete: creator.action.callable(DELETE_USER)
};

export const reducer = combineReducers({
	list: creator.reducer.fromObject({
		[USER_SUCCESS]: (state, action) => {
			return action.payload;
        }
	}, [])
});

export const middleware = creator.middleware.fromObject({
	[GET_USER]: (dispatch, action) => {
        axios.get(`/api/user`).then(res => dispatch({type: USER_SUCCESS, payload: res.data}));
    },
    [CREATE_USER]: (dispatch, action) => {
        axios.post(`/api/user`, action.data).then(res => dispatch({type: USER_SUCCESS, payload: res.data}));
    },
    [EDIT_USER]: (dispatch, action) => {
        axios.put(`/api/user`, action.data).then(res => dispatch({type: USER_SUCCESS, payload: res.data}));
	},
    [DELETE_USER]: (dispatch, action) => {
        axios.delete(`/api/user`, {params: {id: action.data.id}}).then(res => dispatch({type: USER_SUCCESS, payload: res.data}));
	}
});

import * as actions from '../constants/constant';

export const requestApiData = () => ({ type: actions.REQUEST_API_DATA });
export const receiveApiData = data => ({ type: actions.RECEIVE_API_DATA, data });
import * as actions from '../constants/constant';

const initialState={
    username:"",
    password:"",
    city:"",
    loading:false,
    weatherReport:[]
}

const reducer = (state=[], action) => {
    switch(action.type){
        case actions.SIGNUP:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password
            }
        
        case actions.Get_Data:
            return {
                // Fetch karke laao
                ...state,
                // weatherReport: action.payload,
                loading:true
            }
        case actions.Data_Fetched:
            return {
                //Data Fetched successfully
                ...state,
                weatherReport: action.payload,
                loading:false
            }
        default:
            return state;
    }
}

export default reducer;
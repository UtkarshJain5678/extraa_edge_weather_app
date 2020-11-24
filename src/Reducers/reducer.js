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
                loading:true
            }
        case actions.update_city:
            return {
                //Add city name
            }
        case actions.Data_Fetched:
            return {
                //Data Fetched
                loading:false
            }
        default:
            return state;
    }
}

export default reducer;
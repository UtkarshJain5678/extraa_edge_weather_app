import * as actions from '../constants/constant';

function getData(city){
    return function(dispatch){
        const key="3fbb2b31fd3e77c536be64abc677a4d1";
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`)
        .then(res=>res.json())
        .then(data=>{
            dispatch({
                type:actions.Data_Fetched,
                payload: data
            });
        }).catch((error)=>{
            console.log(error);
        })
    }

}

export default getData;
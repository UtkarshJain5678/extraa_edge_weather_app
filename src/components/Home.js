import {useState} from 'react';
import * as actions from '../constants/constant';
import '../App.css';
import getData from '../actions/action';
import {connect} from 'react-redux';

function Home(props) {
  const [city, setcity] = useState("");
  
  const getWeatherInfo=(city)=>
  {
    console.log(getData(city));
  }

  const seachWeatherStatus=(e)=>{
    e.preventDefault();
    if(city==="")
      alert("Please Enter a value");
    else{
      this.props.searchStatus(getWeatherInfo(city));
    }
  }

  return (
    <div className="Home">
      <form onSubmit={seachWeatherStatus}>
        <input type="text" name="city" placeholder="City" onChange={e => setcity(e.target.value)} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

const mapDistpatchToProps=(dispatch)=>{
  searchStatus:(fetchedData)=>dispatch({type: actions.Get_Data, payload:fetchedData})
}

const mapStateToProps=(state)=>{

}

export default connect(null, mapDistpatchToProps)(Home);
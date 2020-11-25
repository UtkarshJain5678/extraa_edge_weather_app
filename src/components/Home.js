import React from "react";
import * as actions from '../constants/constant';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import '../App.css';
import { requestApiData } from "../actions/action";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: "" };
  }

  componentDidMount() {
    this.props.requestApiData();
  }

  render() {
    return (
      <div className="Home">
        <form>
          <input type="text" name="city" placeholder="City" onChange={e => this.setState({city: e.target.value})} />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
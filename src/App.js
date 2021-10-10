import React, {useState} from "react";
import './App.css';
import PropTypes from "prop-types";


function    App()
{
    return (
      <div className="container">
          <h1>Hello world</h1>
          <ClassComp initNumber={2}></ClassComp>
          <FuncComp initNumber={2}></FuncComp>
      </div>
    );
}

class   ClassComp extends React.Component
{
    state = {
        number: this.props.initNumber
    }
    render()
    {
        return (
            <div className="container">
                <h2>class style component</h2>
                <p>Number : {this.state.number}</p>
                <input type="button" value="random" onClick={
                    function(){
                        this.setState({number : Math.random()})
                    }.bind(this)
                }>
                </input>
            </div>
        );
    }
}

function    FuncComp(props)
{
    var     numberState = useState(props.initNumber);
    var     number = numberState[0];
    var     setNumber = numberState[1];
    return (
        <div className="container">
            <h2>function style component</h2>
            <p>Number : {number}</p>
            <input type="button" value="random" onClick={
                function() {
                    setNumber(Math.random());
                }
            }></input>
        </div>
    );
}
export default App;

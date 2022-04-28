import { connect } from "react-redux";
import { startAction } from "./actions/startActions";
import { stopAction } from "./actions/stopActions";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img 
  src={logo} 
  className={
    "App-logo" + 
    (this.props.rotating ? "":" App-logo-paused")
  } 
  alt="logo" 
  onClick={
    this.props.rotating ? 
      this.props.stopAction : this.props.startAction
  }
/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
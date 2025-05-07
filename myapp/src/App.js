// import logo from './logo.svg';
import './App.css';
import {ClassComp, ClassComp1} from './Components/ClassComp';
import Click from './Components/Click';
import FunctionalComp from './Components/FunctionalComp';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <h1>This is my first react app</h1>
      <FunctionalComp></FunctionalComp>
      <ClassComp></ClassComp>
      <ClassComp1></ClassComp1>
      <Click></Click>
    </div>
  );
}

export default App;

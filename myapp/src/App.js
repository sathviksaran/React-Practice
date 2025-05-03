// import logo from './logo.svg';
import './App.css';
import FC from './Components/FunctionalComp';
import {ClassComp,ClassComp1} from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <h1>Hi Tanuja!</h1>
      <FC></FC>
      <ClassComp></ClassComp>
      <ClassComp1></ClassComp1>
      <Click></Click>
      <Counter></Counter>
      <ParentComp></ParentComp>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import {ClassComp, ClassComp1} from './Components/ClassComp';
// import ClassProps from './Components/ClassProps';
// import Click from './Components/Click';
// import Counter from './Components/Counter';
// import FunctionalComp from './Components/FunctionalComp';
// import ParentComp from './Components/ParentComp';
// import FunctionalProp from './Components/FunctionalProp';

import NewComp from './Components/NewComp';

// function App() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <h1>This is my first react app</h1>
//       <FunctionalComp></FunctionalComp>
//       <ClassComp></ClassComp>
//       <ClassComp1></ClassComp1>
//       <Click></Click>
//       <Counter></Counter>
//       <ParentComp></ParentComp>
//       <ClassProps name="Srujana" place="Mumbai">
//         <p>Child Component</p>
//       </ClassProps>
//       <ClassProps name="Tanuja" place="Hyderabad">
//         <button>Click</button>
//       </ClassProps>
//       <ClassProps name="Sathvik" place="Bangalore"></ClassProps>
//       <FunctionalProp name="Saran" place="Hyderabad"></FunctionalProp>
//     </div>
//   );
// }

class App extends React.Component {
  styles = {
    fontStyle: "bold",
    color: "teal"
  };

  render() {
    return (
      <div className='App'>
        <h1 style={this.styles}>Welcome</h1>
        <NewComp></NewComp>
      </div>
    )
  }
}

export default App;

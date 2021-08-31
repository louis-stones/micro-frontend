import React from 'react';
import Header from 'components-app/Header';
import Table from './components/Table';

function App() {
  return (
    <div>
      <Header />
      <Table />
      <ul>
        <li><span style={{color: "red"}}>Red</span> components from micro-frontend app.</li>
        <li><span style={{color: "blue"}}>Blue</span> components from the current app.</li>
      </ul>
    </div>
  );
}

export default App;
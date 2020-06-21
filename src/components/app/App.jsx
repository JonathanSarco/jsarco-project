import React from 'react';
import { Home } from '../home/Home';
import { About } from '../about/About';

function App() {
  return (
    <React.Fragment>
      {/* <NavigationBar /> */}
      <Home />
      <About />
    </React.Fragment>
  );
}

export default App;

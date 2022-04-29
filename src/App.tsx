import React from 'react';
import { Header } from './components/organisms/Header/Header';
import Router from "./Router";

function App() {

  return (
		<>
    <Header></Header>
    <main>
      <Router/>
      {/* <Footer></Footer> */}
    </main>
		</>
  );
}

export default App;

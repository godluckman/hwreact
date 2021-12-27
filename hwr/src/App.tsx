import React from 'react';
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Title from "./components/title";

function App() {
  return (
    <div className="App">
        <Title titleimit={'my new title'}/>
        <Header logo='#' name='HeaderName' />
        <Nav props={[{title: 'Link1', link: '#content'}, {title: 'Link2', link: '#input'}, {title: 'Link3', link: '#square'}]} />
        <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;

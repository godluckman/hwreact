import React from 'react';
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Title from "./components/title";

function App() {
  return (
    <div className="App">
        <Title titleimit={'my new title'}/>
        <Header logo='https://cdn3.iconfinder.com/data/icons/social-media-2487/24/buzznet-256.png' name='Project Name' />
        <Nav props={[{title: 'Link1', link: '#content'}, {title: 'Link2', link: '#input'}, {title: 'Link3', link: '#square'}]} />
        <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;

import React from 'react';
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Title from "./components/title";
import ListItem from "./components/listItem/listItem";


function App () {
    const onCheck = (ingredientName:string, checked: boolean | number) => {
        console.log(ingredientName, checked);
    }
  return (
    <div className="App">
        <Title titleimit={'my new title'}/>
        <Header logo='https://cdn3.iconfinder.com/data/icons/social-media-2487/24/buzznet-256.png' name='Project Name' />
        <Nav props={[{title: 'Link1', link: '#'}, {title: 'Link2', link: '#'}, {title: 'Link3', link: '#'}]} />
        <ListItem ingredientName={'salt'} onCheck={onCheck} type={'checkbox'}/>
        <ListItem ingredientName={'sugar'} onCheck={onCheck} type={'checkbox'}/>
        <ListItem ingredientName={'pepper'} onCheck={onCheck} type={'stepper'}/>
        <ListItem ingredientName={'flour'} onCheck={onCheck} type={'stepper'}/>
        <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;

import React from 'react';

function App() {
  return (
    <div className="App">
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value="John"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default App;

/** @format */
/* eslint-disable no-unused-vars */

function Food({ favorite }) {
  console.log();
  return <h3>I like {favorite}</h3>;
}

function App() {
  return (
    <div className='App'>
      <h1>Hello React!!!</h1>
      <Food favorites='SUSHI' />
      <Food favorites='SAMGEOPSAL' />
    </div>
  );
}

export default App;

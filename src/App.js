/** @format */
/* eslint-disable no-unused-vars */

function Food({ name, pics }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <img src={pics}></img>
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimbab',
    Star: 5,
    image: 'https://en.wikipedia.org/wiki/File:Vegetable_gimbap.jpg',
  },

  {
    name: 'Bbokki',
    Star: 5,
    image: 'https://themoonworld.com/wp-content/uploads/2020/12/DSC08076.jpg',
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} pics={dish.image} />
      ))}
    </div>
  );
}

export default App;

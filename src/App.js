/** @format */
import PropTypes from 'prop-types';

// foodILike function
const foodILike = [
  {
    id: 1,
    name: 'Kimbab',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/56/Vegetable_gimbap.jpg',
    rating: '4.7 / 5.0',
  },

  {
    id: 2,
    name: 'Bbokki',
    image: 'https://themoonworld.com/wp-content/uploads/2020/12/DSC08076.jpg',
    rating: '4.2 / 5.0',
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <img src={picture} alt=''></img>
      <h4>Rating : {rating}</h4>
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
/* renderfood
function renderfood(dish) {
  console.log(dish);
  return <Food name={dish.name} picture={dish.image} />;
}
*/

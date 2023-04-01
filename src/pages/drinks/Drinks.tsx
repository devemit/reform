import cards from './cards';
import CardItem from './CardItem';

const Drinks = () => {
  return (
    <div className='card_grid'>
      {cards.map((el) => (
        <CardItem key={el.title} title={el.title} img={el.img} link={el.link} />
      ))}
    </div>
  );
};

export default Drinks;

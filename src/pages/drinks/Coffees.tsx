import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
const Coffees = () => {
  return (
  
      <div className='table'>
        <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
          <ButtonBack  link={'/menu/drinks'} />
          <DrinktsTitle label={'Кафе/Coffee'} />
        </div>
        <table>
          <tr>
            <th>Производ/Product</th>
            <th>Цена/Price</th>
          </tr>

          <tr>
            <td>Еспресо/Espresso</td>
            <td>60ден/1€</td>
          </tr>
          <tr>
            <td>Еспресо Aрабика/Espresso Arabica</td>
            <td>60ден/1€</td>
          </tr>
          <tr>
            <td>Макијато/Machiato</td>
            <td>70ден/1.2€</td>
          </tr>
          <tr>
            <td>Капучино/Cappuccino</td>
            <td>80ден/1.4€</td>
          </tr>
          <tr>
            <td>Нес Kафе/Nescafe</td>
            <td>80ден/1.4€</td>
          </tr>
          <tr>
            <td>Ирско Kафе/Irish Coffee</td>
            <td>100ден/1.7€</td>
          </tr>
          <tr>
            <td>Ајс Kафе/Ice Coffee</td>
            <td>120ден/2€</td>
          </tr>
          <tr>
            <td>Фредо/Freddo</td>
            <td>120ден/2€</td>
          </tr>
          <tr>
            <td>Лате Kафе/Latte Cafe</td>
            <td>100ден/1.7€</td>
          </tr>
        </table>
      </div>

  );
};

export default Coffees;

import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';

const Burgers = () => {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/foods'} />
        <DrinktsTitle label={'Бургери/Burgers'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Состав/Ingredients</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <td>Хамбургер</td>
          <td style={{ fontSize: '.9rem' }}>
            говедска плескавица,марула,домат,краставица,помфрит,лебче
          </td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Реформ Чизбургер</td>
          <td style={{ fontSize: '.9rem' }}>
            говедска плескавица,зденка,едамер,марула,помфрит,лебче
          </td>
          <td>180ден/3€</td>
        </tr>
        <tr>
          <td>Менхетен Бургер</td>
          <td style={{ fontSize: '.9rem' }}>
            говедска плескавица,сланина,кашкавал,марула,домат,кромид,помфрит,лебче
          </td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Американски класик</td>
          <td style={{ fontSize: '.9rem' }}>
            говедска плескавица,едамер,ббк сос,кисели
            краставички,марула,домат,помфрит,лебче
          </td>
          <td>180ден/3€</td>
        </tr>
        <tr>
          <td>Чикенбургер</td>
          <td style={{ fontSize: '.9rem' }}>
            пилешки стек,домат,краставица,марула,помфрит,лебче
          </td>
          <td>180ден/3€</td>
        </tr>
      </table>
    </div>
  );
};

export default Burgers;

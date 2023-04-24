import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
export default function Deserts() {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/foods'} />
        <DrinktsTitle label={'Десерти/Deserts'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Состав/Ingredients</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <td>Палачинка</td>
          <td style={{ fontSize: '.9rem' }}>крем банана,мед,орево</td>
          <td>110ден/1.9€</td>
        </tr>

        <tr>
          <td>Сладолед Топка</td>
          <td style={{ fontSize: '.9rem' }}>Сладолед</td>
          <td>40ден/.7€</td>
        </tr>
      </table>
    </div>
  );
}

import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
export default function Appetizers() {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/foods'} />
        <DrinktsTitle label={'Предјадења/Appetizers'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Состав/Ingredients</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <td>Реформ Топла Даска</td>
          <td style={{ fontSize: '.9rem' }}>
            поховани прсти,похована зденка,похован кашкавал,похована моцарела,сирење на
            скара,поховани маслинки
          </td>
          <td>1000,500ден/16.5,8.5€</td>
        </tr>
        <tr>
          <td>Пилешки прсти</td>
          <td style={{ fontSize: '.9rem' }}>пилешко брашно,јајце,презла,сусам,помфрит</td>
          <td>220ден/3.6€</td>
        </tr>
      </table>
    </div>
  );
}

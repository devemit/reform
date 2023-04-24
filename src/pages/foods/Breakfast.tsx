import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
export default function Breakfast() {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/foods'} />
        <DrinktsTitle label={'Појадок/Breakfast'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Состав/Ingredients</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <td>Реформ/Reform</td>
          <td style={{ fontSize: '.9rem' }}>
            јајца,едамер,печурки,домат,пршута,масло за јадење,оматен сос
          </td>
          <td>130ден/2.2€</td>
        </tr>
        <tr>
          <td>Омлет/Omelet</td>
          <td style={{ fontSize: '.9rem' }}>
            јајца,домат,краставичка,додаток по избор,шунка,кашкавал,печурки,масло за
            јадење
          </td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Бруклин/Brooklyn</td>
          <td style={{ fontSize: '.9rem' }}>
            лебче,шунка,кашкавал,сланина,шампињони,домат,масло за јадење
          </td>
          <td>150ден/2.5€</td>
        </tr>
      </table>
    </div>
  );
}

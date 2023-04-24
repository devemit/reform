import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
export default function Salads() {
  return (
    <>
      <div className='table'>
        <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
          <ButtonBack link={'/menu/foods'} />
          <DrinktsTitle label={'Салати/Salads'} />
        </div>
        <table>
          <tr>
            <th>Производ/Product</th>
            <th>Состав/Ingredients</th>
            <th>Цена/Price</th>
          </tr>

          <tr>
            <td>Реформ 0.345кг</td>
            <td style={{ fontSize: '.9rem' }}>
              марула,рукола,пршута,пармезан,рокворд,шери,дресинг,маслиново масло
            </td>
            <td>250ден/4.5€</td>
          </tr>
          <tr>
            <td>Цезар 0.400кг</td>
            <td style={{ fontSize: '.9rem' }}>
              марула,шери,пченка,пилешко,пармезан,дресинг,кубети,маслиново масло
            </td>
            <td>220ден/3.7€</td>
          </tr>
          <tr>
            <td>Туна 0.425кг</td>
            <td style={{ fontSize: '.9rem' }}>
              марула,туна,маслинки,домат,кромид,пченка,лимон,дресинг,маслиново масло
            </td>
            <td>220ден/3.7€</td>
          </tr>
          <tr>
            <td>Грчка 0.285кг</td>
            <td style={{ fontSize: '.9rem' }}>
              домат,краставица,млад кормид,варени јајца,сирење,маслиново масло,оригано
            </td>
            <td>150ден/2.5€</td>
          </tr>
          <tr>
            <td>Шопска 0.345кг</td>
            <td style={{ fontSize: '.9rem' }}>
              домат,краставица,млад кормид,сирење,маслиново масло
            </td>
            <td>150ден/2.5€</td>
          </tr>
        </table>
      </div>
    </>
  );
}

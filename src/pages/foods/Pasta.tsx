import React from 'react';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
export default function Pasta() {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/foods'} />
        <DrinktsTitle label={'Тестенини/Паста'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Состав/Ingredients</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <td>Болоњезе 0.400кг</td>
          <td style={{ fontSize: '.9rem' }}>
            болоњезе сос,пармезан,шери,свеж босилек,тестенини по избор,маслиново масло
          </td>
          <td>250ден/4.5€</td>
        </tr>
        <tr>
          <td>Карбонаре 0.360кг</td>
          <td style={{ fontSize: '.9rem' }}>
            панцета,јајца,пармезан,бел сос,магданос,свеж босилек,шери,тестенини по избор
          </td>
          <td>250ден/4.5€</td>
        </tr>
        <tr>
          <td>4 Вида Сирење</td>
          <td style={{ fontSize: '.9rem' }}>
            моцарела,горгонзота,пармезан,адамер,шери,магданос,маслиново масло,тестенини по
            избор
          </td>
          <td>220ден/3.8€</td>
        </tr>
      </table>
    </div>
  );
}

import React from 'react';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
export default function Rissoto() {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/foods'} />
        <DrinktsTitle label={'Рижота/Rissoto'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Состав/Ingredients</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <td>Рижото со зеленчук</td>
          <td style={{ fontSize: '.9rem' }}>
            басамати ориз,мешан зеленчук,свежи шампињони,маслиново масло,сол,бибер
          </td>
          <td>200ден/3.7€</td>
        </tr>
        <tr>
          <td>Реформ Рижото</td>
          <td style={{ fontSize: '.9rem' }}>
            басамати ориз,пилешко,пармезан,свежи печурки,кинеска мешавина
          </td>
          <td>280ден/4.8€</td>
        </tr>
        <tr>
          <td>Пилешко Рижото</td>
          <td style={{ fontSize: '.9rem' }}>
            ориз,пилешко месо,зеленчук,шери,свеж босилек,печурки,маслиново масло,пармезан
          </td>
          <td>250ден/4.2€</td>
        </tr>
      </table>
    </div>
  );
}

import React from 'react';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
export default function Toasts() {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/foods'} />
        <DrinktsTitle label={'Тостови/Toasts'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Состав/Ingredients</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <td>Шунка Кашкавал</td>
          <td style={{ fontSize: '.9rem' }}>шунка,кашкавал,додаток по избор,лебче</td>
          <td>90ден/1.5€</td>
        </tr>
        <tr>
          <td>Кулен Кашкавал</td>
          <td style={{ fontSize: '.9rem' }}>кулен,кашкавал,додаток по избор,лебче</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Врат Кашкавал</td>
          <td style={{ fontSize: '.9rem' }}>врат,кашкавал,додаток по избор,лебче</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Помфрит Додаток</td>
          <td style={{ fontSize: '.9rem' }}>помфрит</td>
          <td>20ден/.4€</td>
        </tr>
      </table>
    </div>
  );
}

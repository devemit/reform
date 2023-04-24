import React from 'react';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';

export default function Sandwiches() {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/foods'} />
        <DrinktsTitle label={'Сендвичи/Sandwiches'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Состав/Ingredients</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <td>Реформ Клуб</td>
          <td style={{ fontSize: '.9rem' }}>
            шунка,сланина,кашкавал,павлака,пармезан,домат,помфрит,леб
          </td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Реформ Ројал</td>
          <td style={{ fontSize: '.9rem' }}>
            пилешки стек,едамер,татар сос,марула,домати,помфрит,корнишон лебче
          </td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Њујорк</td>
          <td style={{ fontSize: '.9rem' }}>
            печеница,едамер,павлака,салата,марула,помфрит,лебче
          </td>
          <td>130ден/2.2€</td>
        </tr>
        <tr>
          <td>Пеперони </td>
          <td style={{ fontSize: '.9rem' }}>кулен,кашкавал,марула,домат,помфрит,лебче</td>
          <td>130ден/2.2€</td>
        </tr>
      </table>
    </div>
  );
}

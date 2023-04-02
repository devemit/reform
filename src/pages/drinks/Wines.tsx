import '../../styles/Table.css';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';

const Wines = () => {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/drinks'} />
        <DrinktsTitle label={'Вино/Wine'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <td>Бело вино 0.187л/White Wine</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Црно вино 0.187л/Red Wine</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Бело вино 0.750л/White Wine</td>
          <td>600ден/10€</td>
        </tr>
        <tr>
          <td>Црно вино 0.750л/Red Wine</td>
          <td>600ден/2€</td>
        </tr>
        <tr>
          <td>Александрија 0.187л/Alexandria</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Александрија куве 0.187л/Alexandria Couve</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Траминец 0.187л/Traminec</td>
          <td>130ден/2.2€</td>
        </tr>
        <tr>
          <td>Розе 0.750л</td>
          <td>600ден/10€</td>
        </tr>
      </table>
    </div>
  );
};

export default Wines;

import React from 'react';
import currencyFormatter from '../helpers/currencyFormatters';

const HouseRow = ({ house, selectHouse }) => {
  //   const priceTd =
  //     house.price < 500000 ? (
  //       <td>{currencyFormatter.format(house.price)}</td>
  //     ) : (
  //       <td className="text-primary">{currencyFormatter.format(house.price)}</td>
  //     );

  //throw new Error('Error in HouseRow');

  return (
    <tr onClick={() => selectHouse(house)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      {/* {priceTd} */}
      {house.price && (
        <td className={`${house.price >= 500000 ? 'text-primary' : ''}`}>
          {currencyFormatter.format(house.price)}
        </td>
      )}
    </tr>
  );
};

// only use memo if the it is faster, check performance.
const HouseRowMem = React.memo(HouseRow);

export default HouseRowMem;

import { memo, useContext } from 'react';
import currencyFormatter from '../helpers/currencyFormatters';
import navigationContext from '../navigation/navigationContext';
import navValues from '../navigation/navValues';

const HouseRow = ({ house }) => {
  const { navigate } = useContext(navigationContext);

  return (
    <tr onClick={() => navigate(navValues.house, house)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      {house.price && (
        <td className={`${house.price >= 500000 ? 'text-primary' : ''}`}>
          {currencyFormatter.format(house.price)}
        </td>
      )}
    </tr>
  );
};

// only use memo if the it is faster, check performance.
const HouseRowMem = memo(HouseRow);

export default HouseRowMem;

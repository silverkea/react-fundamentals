import { memo } from 'react';
import currencyFormatter from '../helpers/currencyFormatters';
import { useNavigate } from 'react-router';

const HouseRow = ({ house }) => {
  const navigate = useNavigate();

  return (
    <tr onClick={() => navigate('/house', { state: { house } })}>
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

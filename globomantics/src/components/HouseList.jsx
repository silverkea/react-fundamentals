import HouseRow from './HouseRow';
//import { useEffect, useState, useRef } from 'react';
import useHouses from '../hooks/useHouses';
import loadingStatus from '../helpers/loadingStatus';
import LoadingIndicator from './LoadingIndicator';
import ErrorBoundary from './ErrorBoundary';

// const houseArray = [
//   {
//     id: 1,
//     address: '12 Valley of Kings, Geneva',
//     country: 'Switzerland',
//     price: 120000,
//   },
//   {
//     id: 2,
//     address: '89 Road of Forks, Bern',
//     country: 'Switzerland',
//     price: 590000,
//   },
// ];

// const fetchHouses = fetch('https://localhost:4000/house').then((r) => r.json());

const HouseList = ({ selectHouse }) => {
  //   const [houses, setHouses] = useState([]);
  //   const counter = useRef(0);

  //   useEffect(() => {
  //     const fecthHouses = async () => {
  //       const response = await fetch('https://localhost:4000/house');
  //       const houses = await response.json();
  //       setHouses(houses);

  //       return () => {
  //         // Cleanup code if needed
  //       };
  //     };
  //     fecthHouses();
  //     counter.current++;
  //   }, []);

  //   const houseResult = use(fetchHouses);
  //   const [houses, setHouses] = useState(houseResult);

  const { houses, setHouses, loadingState } = useHouses();

  if (loadingState !== loadingStatus.loaded) {
    return <LoadingIndicator loadingState={loadingState} />;
  }

  const addHouse = () => {
    setHouses((current) => [
      ...current,
      {
        id: 3,
        address: '32 Valley Way, New York',
        country: 'USA',
        price: 320000,
      },
    ]);
  };

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <ErrorBoundary fallback="Error loading houses">
            {houses.map((h) => (
              <HouseRow key={h.id} house={h} selectHouse={selectHouse} />
            ))}
          </ErrorBoundary>
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        Add House
      </button>
    </>
  );
};
export default HouseList;

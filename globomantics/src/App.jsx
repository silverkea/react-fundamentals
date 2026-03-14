import Banner from './components/Banner';
import './App.css';
import HouseList from './components/HouseList';
import { Suspense, useState, useCallback } from 'react';
import House from './components/House';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [selectedHouse, setSelectedHouse] = useState();

  const setSelectedHouseWrapper = useCallback((house) => {
    //do checks on house
    setSelectedHouse(house);
  }, []);

  return (
    <ErrorBoundary fallback="Something went wrong!">
      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <HouseList />
      </Suspense> */}

      {selectedHouse ? (
        <House house={selectedHouse} />
      ) : (
        <HouseList selectHouse={setSelectedHouseWrapper} />
      )}
    </ErrorBoundary>
  );
}

export default App;

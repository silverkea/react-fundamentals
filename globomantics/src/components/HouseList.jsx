import HouseRow from './HouseRow';
import useHouses from '../hooks/useHouses';
import loadingStatus from '../helpers/loadingStatus';
import LoadingIndicator from './LoadingIndicator';
import ErrorBoundary from './ErrorBoundary';

const HouseList = () => {
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
              <HouseRow key={h.id} house={h} />
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

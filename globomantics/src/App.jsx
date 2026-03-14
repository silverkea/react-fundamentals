import Banner from './components/Banner';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import { useState, useCallback } from 'react';
import navValues from './navigation/navValues';
import NavigationContext from './navigation/navigationContext';
import ComponentPicker from './components/ComponentPicker';

function App() {
  const navigate = useCallback(
    (navTo, param) => setNav({ current: navTo, param, navigate }),
    []
  );

  const [nav, setNav] = useState({ current: navValues.home, navigate });

  return (
    <NavigationContext.Provider value={nav}>
      <ErrorBoundary fallback="Something went wrong!">
        <Banner>
          <div>Providing houses all over the world</div>
        </Banner>
        <ComponentPicker currentNavLocation={nav.current} />
      </ErrorBoundary>
    </NavigationContext.Provider>
  );
}

export default App;

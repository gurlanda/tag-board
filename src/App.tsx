import AreaContextProvider from './context/AreaContextProvider';
import Home from './pages/Home';

const App = ({}: {}): JSX.Element => {
  return (
    <AreaContextProvider>
      <div className="h-full">
        <Home />
      </div>
    </AreaContextProvider>
  );
};

export default App;

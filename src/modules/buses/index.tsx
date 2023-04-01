import { Route, Routes } from 'react-router-dom';
import { BusHomepage } from 'src/modules/buses/pages/BusHomepage';

const BusesModule = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<BusHomepage />} />
    </Routes>
  );
};

export default BusesModule;
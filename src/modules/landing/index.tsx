import { Route, Routes } from 'react-router-dom';
import { Homepage } from 'src/modules/landing/pages/Homepage';

const LandingModule = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default LandingModule;
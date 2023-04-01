import { Routes, Route } from 'react-router-dom';
import { AviaPage } from 'src/modules/avia/pages/AviaPage';
import { URLs } from 'src/constants/urls';
import { EProjectName } from 'src/constants/common';

const AviaModule = (): JSX.Element => {
  return (
    <Routes>
      <Route path={URLs[EProjectName.DEFAULT]} element={<AviaPage />} />
    </Routes>
  );
}

export default AviaModule;

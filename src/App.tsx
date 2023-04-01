import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PageErrorBoundary } from 'src/components/ErrorBoundary';
import { EProjectName } from 'src/constants/common';
import { getModulePage } from 'src/lib/render/modulePages';
import { URLs } from 'src/constants/urls';
import 'src/App.scss';

export function App() {
  const getModuleComponent = (project: EProjectName): React.ReactNode => {
    const Component = getModulePage(project);

    return (
      <PageErrorBoundary>
        <Component />
      </PageErrorBoundary>
    );
  };

  const renderModules = () => (
    <BrowserRouter>
      <Routes>
        <Route
          path={URLs[EProjectName.LANDING]}
          element={getModuleComponent(EProjectName.LANDING)}
        />
        <Route
          path={URLs[EProjectName.AVIA]}
          element={getModuleComponent(EProjectName.AVIA)}
        />
        <Route
          path={URLs[EProjectName.BUSES]}
          element={getModuleComponent(EProjectName.BUSES)}
        />
      </Routes>
    </BrowserRouter>
  );

  return (
    <div>
      {/* Context Providers if needed  */}
      {/* Helmet */}
      {renderModules()}
    </div>
  );
}

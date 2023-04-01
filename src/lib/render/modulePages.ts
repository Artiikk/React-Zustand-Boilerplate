import loadable, { LoadableComponent } from '@loadable/component';
import { EProjectName } from 'src/constants/common';

const AviaModule = loadable(() => import('src/modules/avia'));
const BusesModule = loadable(() => import('src/modules/buses'));
const LandingModule = loadable(() => import('src/modules/landing'));

export const getModulePage = (
  projectType: EProjectName
): LoadableComponent<any> => {
  switch (projectType) {
    case EProjectName.LANDING:
      return LandingModule;
    case EProjectName.AVIA:
      return AviaModule;
    case EProjectName.BUSES:
      return BusesModule;
    default:
      return LandingModule;
  }
};

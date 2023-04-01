import { EProjectName } from 'src/constants/common';

export const defaultUrls = {
  root: '/',
};

export const aviaUrls = {
  aviaRoot: '/avia',
};

export const busesUrls = {
  trainsRoot: '/buses',
};

export const URLs = {
  [EProjectName.DEFAULT]: defaultUrls.root,
  [EProjectName.LANDING]: defaultUrls.root,
  [EProjectName.AVIA]: aviaUrls.aviaRoot,
  [EProjectName.BUSES]: busesUrls.trainsRoot,
};

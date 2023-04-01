const polyfills: Promise<unknown>[] = [];

if (!Element.prototype.matches) {
  polyfills.push(import('./matchesPolyfill'));
}

if (!Element.prototype.closest) {
  // @ts-ignore
  polyfills.push(import('./closestPolyfill'));
}

if (!window.IntersectionObserver) {
  // @ts-ignore
  polyfills.push(import('intersection-observer'));
}

if (!window.ResizeObserver) {
  polyfills.push(import('./resizeObserverPolyfill'));
}

if (!window.AbortController) {
  polyfills.push(
    // @ts-ignore
    import('abortcontroller-polyfill/dist/abortcontroller-polyfill-only')
  );
}

export default Promise.all(polyfills);

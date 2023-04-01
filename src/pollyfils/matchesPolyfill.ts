const matchesPolyfill = (): void => {
  Element.prototype.matches =
    // @ts-ignore IE specific api
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
};

export default matchesPolyfill();

const closestPolyfill = (): void => {
  Element.prototype.closest = function (s: string): Element | null {
    let el = this;

    do {
      if (el.matches(s)) return el;
      // @ts-ignore IE specific api
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
};

export default closestPolyfill();

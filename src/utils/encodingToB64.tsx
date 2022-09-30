export function encodingToB64(str: string | number | boolean) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }
  
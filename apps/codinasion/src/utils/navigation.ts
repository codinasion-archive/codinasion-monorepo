export function ScrollToTop() {
  // eslint-disable-next-line no-undef
  window &&
    // eslint-disable-next-line no-undef
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
}

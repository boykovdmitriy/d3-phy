export function ResizeDetector(subscriptionCb) {
  subscriptionCb({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })
  window.addEventListener('resize', () => {
    subscriptionCb({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  });
}
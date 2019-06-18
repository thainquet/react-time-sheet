export const clearAuth = () => {
  let now = new Date().getTime();
  let setupTime = localStorage.getItem('setupTime');
  if (!setupTime || now - setupTime > 30 * 60 * 1000) {
    localStorage.clear()
  }
}
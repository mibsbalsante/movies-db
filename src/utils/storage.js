export const saveToStorage = (key, list) =>
  window.sessionStorage.setItem(key, JSON.stringify(list))

export const getFromStorage = key =>
  JSON.parse(window.sessionStorage.getItem(key)) || null

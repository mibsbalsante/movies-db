const usePageTitle = pageTitle => {
  const globalPageTitle = import.meta.env.VITE_PAGE_TITLE

  if (pageTitle) window.document.title = `${pageTitle} | ${globalPageTitle}`
  else window.document.title = pageTitle
}

export default usePageTitle

const getRouteParam = (pathname) => {
  const url = pathname.split('/');

  return url[url.length - 1] || url[url.length - 2];
};

export default getRouteParam;

import getRouteParam from '../getRouteParam';

describe('getRouteParam function', () => {
  test('should return "2" for input like "/categories/product/2/" ', () => {
    // GIVEN
    const mockRoute = '/categories/product/2/';
    const expectedResult = '2';

    // WHEN
    const actualResult = getRouteParam(mockRoute);

    // THEN
    expect(actualResult).toBe(expectedResult);
  });

  test('should return "2" for input like "/categories/product/2" ', () => {
    // GIVEN
    const mockRoute = '/categories/product/2';
    const expectedResult = '2';

    // WHEN
    const actualResult = getRouteParam(mockRoute);

    // THEN
    expect(actualResult).toBe(expectedResult);
  });
});

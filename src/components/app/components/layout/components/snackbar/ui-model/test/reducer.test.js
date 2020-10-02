import { openSnackbar, closeSnackbar } from '../actions';

import { open as openReducer, message as messageReducer } from '../reducer';

describe('Snackbar openReducer', () => {
  test('should return true, on openSnackbar action input', () => {
    // GIVEN
    const expectedState = true;

    // WHEN
    const actualState = openReducer({}, openSnackbar());

    // THEN
    expect(expectedState).toBe(actualState);
  });

  test('should return false, on closeSnackbar action input', () => {
    // GIVEN
    const expectedState = false;

    // WHEN
    const actualState = openReducer({}, closeSnackbar());

    // THEN
    expect(expectedState).toBe(actualState);
  });
});

describe('Snackbar messageReducer', () => {
  test('should return given payload message, on openSnackbar action input', () => {
    // GIVEN
    const mockMessage = 'testMessage';
    const expectedState = mockMessage;

    // WHEN
    const actualState = messageReducer(
      {},
      openSnackbar({ message: mockMessage }),
    );

    // THEN
    expect(expectedState).toBe(actualState);
  });

  test('should return null, on closeSnackbar action input', () => {
    // GIVEN
    const expectedState = null;

    // WHEN
    const actualState = messageReducer({}, closeSnackbar());

    // THEN
    expect(expectedState).toBe(actualState);
  });
});

// import { getProducts } from 'models/products';

// describe('BreadcrumbsReducer', () => {
//   test("should return the expected state { breadcrumb: 'breadcrumb-entry'}, when setBreadcrumb action occurs with 'breadcrumb-entry' payload", () => {
//     // GIVEN
//     const action = {
//       type: setBreadcrumb.type,
//       payload: 'breadcrumb-entry',
//     };

//     // WHEN
//     const expectedState = {
//       breadcrumb: 'breadcrumb-entry',
//     };
//     const receivedState = BreadcrumbsReducer({}, action);

//     // THEN
//     expect(receivedState).toEqual(expectedState);
//   });

//   test("should return the expected state { breadcrumb: 'breadcrumb-entry'}, when getProducts action success action occurs with {breadcrumb: 'breadcrumb-entry'} payload", () => {
//     // GIVEN
//     const action = {
//       type: getProducts.succeeded.type,
//       payload: {
//         breadcrumb: 'breadcrumb-entry',
//       },
//     };

//     // WHEN
//     const expectedState = {
//       breadcrumb: 'breadcrumb-entry',
//     };
//     const receivedState = BreadcrumbsReducer({}, action);

//     // THEN
//     expect(receivedState).toEqual(expectedState);
//   });
// });

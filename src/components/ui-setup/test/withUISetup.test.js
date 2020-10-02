import * as store from 'store';

import withUISetup from '../withUISetup';

describe('withUISetup HOC', () => {
  test('renders successfully', () => {
    // GIVEN
    const createStoreSpy = jest.spyOn(store, 'createStore').mockReturnValue({
      history: [],
    });
    const DummyComponent = () => <div />;
    const WrappedDummyComponent = withUISetup(DummyComponent);

    // WHEN
    const tree = shallowSnapshot(<WrappedDummyComponent />);

    // THEN
    expect(createStoreSpy).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});

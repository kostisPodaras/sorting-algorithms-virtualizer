import config from 'config';
import fetchMock from 'fetch-mock';

import { user } from './data'; // TODO: add correct mocked data

fetchMock.config.fallbackToNetwork = true;
fetchMock.config.overwriteRoutes = true;

if (config.mockedData) {
  fetchMock.mock({
    matcher: 'ADD APPROPRIATE MATCHER', // see http://www.wheresrhys.co.uk/fetch-mock/
    response: user,
  });

  fetchMock.flush();
}

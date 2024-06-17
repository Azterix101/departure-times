import { getDepartureTimes } from '../src/services/departureService';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('getDepartureTimes', () => {
  it('should fetch departure times', async () => {
    const mockData = { data: { data: 'departure times data' } };
    mock.onGet('https://retro.umoiq.com/service/publicXMLFeed?command=predictions&a=sf-muni&r=N&stopId=1234').reply(200, mockData);

    const result = await getDepartureTimes('sf-muni', 'N', '1234');
    expect(result).toEqual(mockData);
  });

  it('should throw an error if fetching departure times fails', async () => {
    const mockError = {
      response: {
        data: 'Agency parameter "a=sf-muni" is not valid.',
      },
    };
    mock.onGet('https://retro.umoiq.com/service/publicXMLFeed?command=predictions&a=sf-muni&r=N&stopId=1234').reply(400, mockError.response.data);

    await expect(getDepartureTimes('sf-muni', 'N', '1234')).rejects.toThrow('Failed to fetch departure times: Agency parameter "a=sf-muni" is not valid.');
  });
});

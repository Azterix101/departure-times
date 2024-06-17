import request from 'supertest';
import app from '../src/app';
import { getPredictions } from '../src/services/nextBusService';

jest.mock('../src/services/nextBusService');

describe('GET /api/departures', () => {
  it('should return 400 if query parameters are missing', async () => {
    const response = await request(app).get('/api/departures');
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Missing required query parameters');
  });

  it('should return departure times data', async () => {
    const mockData = 'departure times data';
    (getPredictions as jest.Mock).mockResolvedValue(mockData);

    const response = await request(app).get('/api/departures?agency=sf-muni&route=N&stopId=1234');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ data: mockData });
  });
});

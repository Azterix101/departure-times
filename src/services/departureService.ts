import axios from 'axios';

const NEXTBUS_BASE_URL = 'https://retro.umoiq.com/service/publicXMLFeed';

export const getDepartureTimes = async (agency: string, route: string, stopId: string) => {
  try {
    const response = await axios.get(`${NEXTBUS_BASE_URL}?command=predictions&a=${agency}&r=${route}&stopId=${stopId}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch departure times: ${error.response?.data || error.message}`);
    }
    throw new Error('An unknown error occurred');
  }
};

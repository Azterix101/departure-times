import axios from 'axios';

const BASE_URL = 'http://webservices.nextbus.com/service/publicXMLFeed';

export const getAgencyList = async () => {
  const response = await axios.get(`${BASE_URL}?command=agencyList`);
  return response.data;
};

export const getRouteList = async (agency: string) => {
  const response = await axios.get(`${BASE_URL}?command=routeList&a=${agency}`);
  return response.data;
};

export const getPredictions = async (agency: string, route: string, stopId: string) => {
  const response = await axios.get(`${BASE_URL}?command=predictions&a=${agency}&r=${route}&s=${stopId}`);
  return response.data;
};

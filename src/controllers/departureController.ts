import { Request, Response } from 'express';
import { getAgencyList, getRouteList, getPredictions } from '../services/nextBusService';

export const fetchAgencyList = async (req: Request, res: Response) => {
  try {
    const data = await getAgencyList();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

export const fetchRouteList = async (req: Request, res: Response) => {
  const { agency } = req.query;
  if (!agency) {
    return res.status(400).json({ error: 'Missing required query parameter: agency' });
  }

  try {
    const data = await getRouteList(agency as string);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

export const fetchPredictions = async (req: Request, res: Response) => {
  const { agency, route, stopId } = req.query;
  if (!agency || !route || !stopId) {
    return res.status(400).json({ error: 'Missing required query parameters' });
  }

  try {
    const data = await getPredictions(agency as string, route as string, stopId as string);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

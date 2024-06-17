import express from 'express';
import { fetchAgencyList, fetchRouteList, fetchPredictions } from '../controllers/departureController';

const router = express.Router();

router.get('/agencies', fetchAgencyList);
router.get('/routes', fetchRouteList);
router.get('/departures', fetchPredictions); // Ensure this route matches the test

export default router;

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DepartureTimes: React.FC = () => {
  const [agencyList, setAgencyList] = useState(null);
  const [routeList, setRouteList] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/agencies');
        setAgencyList(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchAgencies();
  }, []);

  const fetchRoutes = async (agency: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/api/routes?agency=${agency}`);
      setRouteList(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const fetchDepartureTimes = async (agency: string, route: string, stopId: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/api/predictions?agency=${agency}&route=${route}&stopId=${stopId}`);
      setPredictions(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Departure Times</h1>
      <pre>{JSON.stringify(agencyList, null, 2)}</pre>
      <pre>{JSON.stringify(routeList, null, 2)}</pre>
      <pre>{JSON.stringify(predictions, null, 2)}</pre>
    </div>
  );
};

export default DepartureTimes;

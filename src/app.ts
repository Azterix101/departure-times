import express from 'express';
import cors from 'cors';
import departureRoutes from './routes/departureRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', departureRoutes);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

export default app;

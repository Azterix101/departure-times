import express from 'express';
import departureRoutes from './routes/departureRoutes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', departureRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

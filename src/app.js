import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(cors({
  origin: ['https://bank-sampah-rust.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔥 TEST ROOT (WAJIB)
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API Bank Sampah berjalan 🚀'
  });
});

// API
app.use('/api', userRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint tidak ditemukan'
  });
});

export default app;

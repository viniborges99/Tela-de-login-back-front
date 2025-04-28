import express from 'express';
import publicRoutes from './routes/public.js';
import privateRoutes from './routes/private.js';
import auth from './middlewares/auth.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', publicRoutes);
app.use('/', auth, privateRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando perfeito!!');
});

//users
//MB11gWigLQF6PpnI senha mongo
//mongodb+srv://borgesvinicius27:MB11gWigLQF6PpnI@users.wmdlyvj.mongodb.net/?retryWrites=true&w=majority&appName=users

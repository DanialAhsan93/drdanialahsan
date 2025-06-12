import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js'

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected!!')
  }).catch((err) => {
    console.log(err)
  });


const app = express();

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter)


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!!`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'internal server error';
  res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  })

})
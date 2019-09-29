import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';


const app = express();
const port = 8081;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/device').then(
  () => {
    console.log('Database connection is successful');
  },
  (err) => {
    console.log(`Error when connecting to the database${err}`);
  },
);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes);
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;

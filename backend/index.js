import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
  res.send('Hello from DALL-E (clone)');
});

const startServer = async () => {
	  const port = process.env.PORT || 8080;
	app.listen(port, () => {
		console.log(`Server started on port ${port}`);
	});
}

startServer();
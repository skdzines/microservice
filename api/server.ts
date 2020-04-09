import express, {Application, Request, Response, NextFunction} from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './routes';

//CONSTANTS
const PORT: String = process.env.PORT || '3000';

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client'));

app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/../client/index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
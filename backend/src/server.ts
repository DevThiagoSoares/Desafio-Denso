import express, { response } from 'express';
import multer from 'multer';
import fs from 'fs';
import csvParse from 'csv-parser';

const upload = multer({
  dest: './tmp',
});

const app = express();

interface Upload {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

function loadCategories(file: Express.Multer.File): Promise<Upload[]> {
  return new Promise((resolver, reject) => {
    const stream = fs.createReadStream(file.path);

    const parseFile = csvParse();

    stream.pipe(parseFile);

    const categories: Upload[] = [];

    parseFile
      .on(
        'data',
        async (line: {
          date: string;
          open: string;
          high: string;
          low: string;
          close: string;
          volume: string;
        }) => {
          console.log(line);
          const { date, open, high, low, close, volume } = line;
          categories.push(line);
        },
      )
      .on('end', () => {
        resolver(categories);
      })
      .on('error', (err: any) => {
        reject(err);
      });
  });
}


app.post('/uploadCSV', upload.single('file'), async (request, response) => {
  const { file } = request;
  const categories = await loadCategories(file);
  return response.status(200).json(categories);
});

app.post('/upload', upload.single('file'), async (request, response) => {
  const { file } = request;
  return response.send(file);
});



app.listen(3000, () => {
  console.log('🏃 Running Server');
});

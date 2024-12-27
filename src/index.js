import fs from 'fs';
import path from 'path';

export const parseFile = (filePath) => {

  const absolutePath = path.resolve(process.cwd(), filePath);
  
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  
  try {
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Ошибка при парсинге файла ${filePath}: ${error.message}`);
    process.exit(1);
  }
};

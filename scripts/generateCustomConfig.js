// scripts/generateCustomConfig.js
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Путь к .env
const envPath = path.resolve('.env');

// Читаем содержимое .env
let envContent;
try {
  envContent = fs.readFileSync(envPath, { encoding: 'utf-8' });
} catch (err) {
  console.error('⚠️ Не удалось прочитать .env:', err.message);
  process.exit(1);
}

// Формируем JS-файл
const content = `// ⚠️ Auto-generated file. Do not edit manually.
export const customConfig = \`
${envContent}
\`;
`;

// Записываем в src/customConfig.js
try {
  fs.writeFileSync(path.resolve('src/customConfig.js'), content);
  console.log('✅ customConfig.js generated.');
} catch (err) {
  console.error('⚠️ Не удалось записать customConfig.js:', err.message);
  process.exit(1);
}

// Добавляем файл в git, чтобы попал в коммит
try {
  execSync('git add src/customConfig.js');
  console.log('📦 customConfig.js added to git.');
} catch (err) {
  console.error('⚠️ Не удалось добавить customConfig.js в git:', err.message);
  process.exit(1);
}
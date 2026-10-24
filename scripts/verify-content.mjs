import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const contentSourcePath = path.join(rootDir, 'docs', 'content-source.md');
const contentArPath = path.join(rootDir, 'src', 'content', 'content.ar.ts');
const srcDir = path.join(rootDir, 'src');

console.log('--- Starting Content Verification ---');

if (!fs.existsSync(contentSourcePath)) {
  console.error(`Error: ${contentSourcePath} not found!`);
  process.exit(1);
}

if (!fs.existsSync(contentArPath)) {
  console.error(`Error: ${contentArPath} not found!`);
  process.exit(1);
}

const contentSourceText = fs.readFileSync(contentSourcePath, 'utf8');
const contentArText = fs.readFileSync(contentArPath, 'utf8');

// Check 1: Every line of docs/content-source.md must be present in content.ar.ts
const sourceLines = contentSourceText
  .split(/\r?\n/)
  .map(l => l.trim())
  .filter(l => l.length > 0 && !/^\|?[-:\s|]+$/.test(l) && l !== '---');

let missingLines = 0;
for (const line of sourceLines) {
  if (line.startsWith('|') && line.endsWith('|')) {
    const cells = line.split('|').map(c => c.trim()).filter(Boolean);
    for (const cell of cells) {
      if (cell && !contentArText.includes(cell)) {
        console.error(`Missing cell content from content.ar.ts: "${cell}"`);
        missingLines++;
      }
    }
  } else {
    if (!contentArText.includes(line)) {
      const stripped = line.replace(/^#+\s*/, '').replace(/^[-*]\s*/, '').trim();
      if (!contentArText.includes(stripped) && !contentArText.includes(line)) {
        console.error(`Missing line in content.ar.ts:\n  "${line}"`);
        missingLines++;
      }
    }
  }
}

if (missingLines > 0) {
  console.error(`\nFAILED: ${missingLines} content line(s) missing from content.ar.ts`);
  process.exit(1);
} else {
  console.log(`PASSED: All ${sourceLines.length} content lines found in content.ar.ts`);
}

// Check 2: Arabic strings in src/ (outside content.ar.ts and whitelist) must be found in docs/content-source.md
const whitelistPhrases = [
  'الرئيسية',
  'المشكلة والأثر',
  'الحلول القائمة',
  'المنصة والنموذج الذكي',
  'المتطلبات والمعمارية',
  'نموذج العمل والحدود',
  'السابق',
  'التالي',
  'المصادر',
  'الوضع الافتراضي',
  'وضع الطوارئ الحاد',
  'بيانات محاكاة',
  'مركز 1',
  'مركز 2',
  'مركز 3',
  // Short image alt texts allowed
  'صورة وحدة غسيل كلوي في مستشفى',
  'صورة مريض يتلقى جلسة غسيل كلوي',
  'صورة قاعة انتظار في المستشفى',
  'صورة مريض كبير السن',
  'صورة ممرض يفحص ماكينة الغسيل',
  'صورة مبنى مستشفى',
  'صورة فلاتر ومستلزمات طبية',
];

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (/\.(tsx|ts|jsx|js|html)$/.test(file) && !filePath.endsWith('content.ar.ts')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const filesToCheck = getAllFiles(srcDir);
let unauthorizedArabic = 0;

for (const file of filesToCheck) {
  let code = fs.readFileSync(file, 'utf8');

  // Strip multi-line comments /* ... */ and JSX comments {/* ... */}
  code = code.replace(/\{\/\*[\s\S]*?\*\/\}/g, '').replace(/\/\*[\s\S]*?\*\//g, '');
  // Strip single-line comments // ...
  code = code.replace(/\/\/.*$/gm, '');

  // Match contiguous Arabic phrases (ignoring quotes and punctuation delimiters)
  const arabicMatches = code.match(/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF][\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF0-9\s،؛:.-]*/g) || [];

  for (let rawMatch of arabicMatches) {
    const match = rawMatch.trim();
    if (!match || match.length < 2) continue;

    // Check if covered by whitelist
    const isWhitelisted = whitelistPhrases.some(w => match.includes(w) || w.includes(match));
    if (isWhitelisted) continue;

    // Check if in docs/content-source.md
    if (!contentSourceText.includes(match)) {
      // Check word by word
      const words = match.split(/\s+/).filter(w => w.length > 1);
      const allWordsInSource = words.length > 0 && words.every(w =>
        contentSourceText.includes(w) || whitelistPhrases.some(wh => wh.includes(w))
      );

      if (!allWordsInSource) {
        console.warn(`Disallowed or unverified Arabic string in ${path.relative(rootDir, file)}: "${match}"`);
        unauthorizedArabic++;
      }
    }
  }
}

if (unauthorizedArabic > 0) {
  console.error(`\nFAILED: Found ${unauthorizedArabic} Arabic string(s) outside content.ar.ts and whitelist.`);
  process.exit(1);
} else {
  console.log('PASSED: No unauthorized Arabic strings found in src/ components.');
}

console.log('--- Content Verification Completed Successfully ---');

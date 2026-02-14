import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, "../raw-images");
const outputDir = path.join(__dirname, "../public/images/countries");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function processFolder(folderPath, countryName) {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const inputPath = path.join(folderPath, file);

    if (fs.lstatSync(inputPath).isFile()) {
      const fileName = path.parse(file).name.toLowerCase();

      const outputPath = path.join(
        outputDir,
        `${countryName.toLowerCase()}-${fileName}.webp`,
      );

      await sharp(inputPath)
        .resize({ width: 1200 })
        .webp({ quality: 75 })
        .toFile(outputPath);

      console.log(`Optimized: ${countryName}/${file}`);
    }
  }
}

const countries = fs.readdirSync(inputDir);

for (const country of countries) {
  const countryPath = path.join(inputDir, country);

  if (fs.lstatSync(countryPath).isDirectory()) {
    await processFolder(countryPath, country);
  }
}

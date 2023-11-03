const sharp = require("sharp");
const fs = require("fs-extra"); // Using fs-extra for its enhanced file handling
const path = require("path");

const dirPath = path.join("public", "static", "project-pics");
const excludedImagesPath = path.join("optimization", "excludedImages.json");

const dimensionsMapping = {
  "benin-sdr": { width: 444, height: 332 },
  "data-hub": { width: 444, height: 332 },
  "ekam-demo": { width: 444, height: 332 },
  "esdr-2022": { width: 444, height: 332 },
  gcsi: { width: 444, height: 332 },
  "impact-investment-toolkit": { width: 444, height: 332 },
  "iron-guitar-demo": { width: 444, height: 332 },
  "spillovers-dashboard": { width: 444, height: 332 },
  "new-als-demo": { width: 444, height: 332 },
  "sdg-transformation-center": { width: 444, height: 332 },
  "old-als-demo": { width: 444, height: 332 },
  "osteomeaux-demo": { width: 444, height: 332 },
  "cosmousse-demo": { width: 260, height: 444 },
  // ... add more mappings as needed
};

// Load excluded images from JSON file, or default to an empty object if not found
let excludedImages = {};
try {
  excludedImages = fs.readJsonSync(excludedImagesPath);
} catch (error) {
  console.log("No excluded images file found. Starting from scratch.");
}

const processAvif = async (file) => {
  const fileName = path.basename(file);

  if (excludedImages[fileName]) {
    console.log(`Skipping excluded image: ${fileName}`);
    return;
  }

  try {
    const input = await fs.readFile(file);
    const metadata = await sharp(input).metadata();
    const dimensions = dimensionsMapping[fileName] || {
      width: metadata.width,
      height: metadata.height,
    };
    await sharp(input).resize(dimensions.width, dimensions.height).toFile(file);

    console.log(`Processed ${fileName}`); // <-- Moved the log statement here

    // Update the excludedImages list
    excludedImages[fileName] = true;
  } catch (error) {
    console.error(`Error processing file ${file}:`, error);
  }
};

const processGif = async (file) => {
  const fileName = path.basename(file);

  if (excludedImages[fileName]) {
    console.log(`Skipping excluded image: ${fileName}`);
    return;
  }

  try {
    const input = await fs.readFile(file);
    const metadata = await sharp(input).metadata();
    const dimensions = dimensionsMapping[fileName] || {
      width: metadata.width,
      height: metadata.height,
    };

    await sharp(input, { animated: true })
      .resize(dimensions.width, dimensions.height)
      .toFile(file.replace(".gif", ".webp"));
    await fs.unlink(file); // Delete the original .gif

    console.log(`Processed ${fileName}`); // <-- Moved the log statement here

    // Update the excludedImages list
    excludedImages[fileName] = true;
  } catch (error) {
    console.error(`Error processing file ${file}:`, error);
  }
};

// Main functions
const processFiles = async () => {
  try {
    const files = await fs.readdir(dirPath);

    for (const file of files) {
      if (path.extname(file).toLowerCase() === ".avif") {
        await processAvif(path.join(dirPath, file));
      } else if (path.extname(file).toLowerCase() === ".gif") {
        await processGif(path.join(dirPath, file));
      }
    }

    // Save the updated excluded images list
    await fs.writeJson(excludedImagesPath, excludedImages);
    console.log("Updated the excluded images list.");
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = processFiles;

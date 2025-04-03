import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name properly in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory containing SVG icons
const iconsDir = path.join(__dirname, "src", "assets", "icons");

// Function to replace color values with currentColor
function replaceColorsWithCurrentColor(content) {
  // Replace solid black fill values with currentColor
  let updatedContent = content.replace(
    /fill="(#000000|#000|black)"/gi,
    'fill="currentColor"'
  );
  updatedContent = updatedContent.replace(
    /fill:\s*(#000000|#000|black)\s*;/gi,
    "fill: currentColor;"
  );

  // Replace solid black stroke values with currentColor
  updatedContent = updatedContent.replace(
    /stroke="(#000000|#000|black)"/gi,
    'stroke="currentColor"'
  );
  updatedContent = updatedContent.replace(
    /stroke:\s*(#000000|#000|black)\s*;/gi,
    "stroke: currentColor;"
  );

  // Replace rgb(0, 0, 0) with currentColor
  updatedContent = updatedContent.replace(
    /fill="rgb\(0,\s*0,\s*0\)"/gi,
    'fill="currentColor"'
  );
  updatedContent = updatedContent.replace(
    /stroke="rgb\(0,\s*0,\s*0\)"/gi,
    'stroke="currentColor"'
  );

  // Replace rgba(0, 0, 0, 1) with currentColor
  updatedContent = updatedContent.replace(
    /fill="rgba\(0,\s*0,\s*0,\s*1\)"/gi,
    'fill="currentColor"'
  );
  updatedContent = updatedContent.replace(
    /stroke="rgba\(0,\s*0,\s*0,\s*1\)"/gi,
    'stroke="currentColor"'
  );

  return updatedContent;
}

// Process all SVG files in the directory
async function processSvgFiles() {
  try {
    // Read all files in the directory
    const files = fs.readdirSync(iconsDir);

    // Counter for modified files
    let modifiedCount = 0;

    // Process each SVG file
    for (const file of files) {
      if (path.extname(file).toLowerCase() === ".svg") {
        const filePath = path.join(iconsDir, file);

        // Read file content
        const content = fs.readFileSync(filePath, "utf8");

        // Replace colors with currentColor
        const updatedContent = replaceColorsWithCurrentColor(content);

        // If content was modified, write it back to the file
        if (content !== updatedContent) {
          fs.writeFileSync(filePath, updatedContent, "utf8");
          console.log(`Updated: ${file}`);
          modifiedCount++;
        } else {
          console.log(`No changes needed for: ${file}`);
        }
      }
    }

    console.log(`\nProcess completed. Modified ${modifiedCount} SVG files.`);
  } catch (error) {
    console.error("Error processing SVG files:", error);
  }
}

// Run the script
processSvgFiles();

// Import the promise-based file system module for asynchronous file operations
import fs from "fs/promises";

// Import the regular (synchronous) file system module for quick checks like existsSync
import fsn from "fs";

// Import Node.js built-in path module to handle file paths safely and cleanly
import path from "path";

// Set the path to the directory you want to clean up and organize
const basepath = "/Users/jaychauhan/Desktop/Sigma Web Developer/video 93";

// Read all the contents (files/folders) inside the basepath directory
let files = await fs.readdir(basepath);

// Loop through each file/folder in the directory
for (const item of files) {

  // Get the file extension (e.g., "jpg" from "cat.jpg")
  let ext = item.split(".").pop();

  // Skip files that:
  // 1. Are JavaScript or JSON files
  // 2. Don’t have any extension (e.g., folders or hidden files)
  if (ext !== "js" && ext !== "json" && item.split(".").length > 1) {

    // Check if a folder for this extension already exists (e.g., "jpg/")
    if (fsn.existsSync(path.join(basepath, ext))) {
      
      // If it exists, move the file into that folder 
      fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
    
    } else {
      // If the folder doesn't exist, create it (async!)
      await fs.mkdir(path.join(basepath, ext));

      // Then move the file into the newly created folder
      fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
    }
  }
}

/*
👨‍💻 What This Script Does:
---------------------------
1. Looks inside the target folder (basepath).
2. For each file:
   - Finds its extension.
   - Skips files like .js or .json.
   - Creates a folder with that extension name (if not already there).
   - Moves the file into that folder.

📁 Example:
Input files:
  - name.jpg
  - cat.jpg
  - notes.pdf

After running:
  - jpg/name.jpg
  - jpg/cat.jpg
  - pdf/notes.pdf

✅ Tips:
- Use `await` for async calls like `fs.mkdir` so the folder is fully created before moving files.
- Use `path.join()` instead of manually adding slashes — it's OS-safe.
*/
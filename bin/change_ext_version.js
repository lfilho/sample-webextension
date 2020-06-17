#!/usr/bin/env node

import fs from 'fs/promises';

import Logger from '../src/shared/util/logger.js';

const MANIFEST_FILE = 'src/manifest.json';
const UTF8 = 'utf8';
const newVersion = process.argv[2];

(async () => {
  try {
    const fileContent = await fs.readFile(MANIFEST_FILE, UTF8);
    const newFileContent = fileContent.replace(
      /"version": "\d+.\d+.\d+"/,
      `"version": "${newVersion}"`
    );
    await fs.writeFile(MANIFEST_FILE, newFileContent, UTF8);
  } catch (error) {
    Logger.error(error);
    process.exit(2);
  }
})();

#!/usr/bin/env node

import fs from 'fs';

import Logger from '../src/shared/util/logger.js';

const MANITFEST_FILE = 'src/manifest.json';
const newVersion = process.argv[2];

function exitWithError(error) {
  Logger.error(error);
  process.exit(2);
}

fs.readFile(MANITFEST_FILE, 'utf8', (err, fileContent) => {
  if (err) {
    exitWithError(err);
  }
  const newFileContent = fileContent.replace(
    /"version": "\d+.\d+.\d+"/g,
    `"version": "${newVersion}"`
  );

  fs.writeFile(MANITFEST_FILE, newFileContent, 'utf8', (err) => {
    if (err) {
      exitWithError(err);
    }
  });
});

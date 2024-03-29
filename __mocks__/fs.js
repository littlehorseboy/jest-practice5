const path = require('path');

const fs = jest.genMockFromModule('fs');

let mockFiles = Object.create(null);

/* eslint-disable-next-line */
function __setMockFiles(newMockFiles) {
  mockFiles = Object.create(null);

  /* eslint-disable-next-line */
  for(const file in newMockFiles) {
    const dir = path.dirname(file);

    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }

    mockFiles[dir].push(path.basename(file));
  }
}

function readdirSync(directoryPath) {
  return mockFiles[directoryPath] || [];
}

/* eslint-disable-next-line */
fs.__setMockFiles = __setMockFiles;
fs.readdirSync = readdirSync;

module.exports = fs;

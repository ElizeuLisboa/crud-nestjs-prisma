const { rm } = require('fs/promises');
const path = require('path');

module.exports = async () => {
  const dbPath = path.resolve(__dirname, 'prisma', 'dev-test.db');
  await rm(dbPath, { force: true });
}


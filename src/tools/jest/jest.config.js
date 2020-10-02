const ROOT_DIR = '<rootDir>';
const SRC_DIR = `${ROOT_DIR}/src`;

const JS_FILENAMES_TO_SKIP_COVERAGE = [
  'actions',
  'config',
  'index',
  'mockData',
  'routes',
  'selectors',
  'services',
  'styles',
].join('|');

module.exports = {
  rootDir: '../../../',
  clearMocks: true,
  collectCoverageFrom: [
    `${SRC_DIR}/**/*.js`,
    `!${SRC_DIR}/**/(${JS_FILENAMES_TO_SKIP_COVERAGE})+(.js)`,
    `!${SRC_DIR}/**/*.testData.js`,
    `!${SRC_DIR}/store/**/*.js`,
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/',
    '/ui-setup/theme/',
    '/fetch-mock/',
    '/tools/',
  ],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^core/(.*)': `${ROOT_DIR}/../ote-core/$1`,
    '^components/(.*)': `${SRC_DIR}/components/$1`,
    '^config$': `${ROOT_DIR}/config`,
    '^models/(.*)': `${SRC_DIR}/models/$1`,
    '^pages/(.*)': `${SRC_DIR}/pages/$1`,
    '^store/(.*)': `${SRC_DIR}/store/$1`,
    '^test/(.*)': `${SRC_DIR}/tools/jest/$1`,
    '^utils$': `${SRC_DIR}/utils`,
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${SRC_DIR}/tools/jest/mocks/file.js`,
    '\\.(css|less|sass)$': `${SRC_DIR}/tools/jest/mocks/style.js`,
  },
  roots: [SRC_DIR],
  setupFiles: [
    `${SRC_DIR}/tools/jest/setup/tests.js`,
    `${SRC_DIR}/tools/jest/setup/mocks.js`,
  ],
  testEnvironment: 'jsdom',
  testMatch: [`${ROOT_DIR}/**/*.test.js`],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    `${ROOT_DIR}/coverage/`,
    `${ROOT_DIR}/node_modules/`,
  ],
  modulePathIgnorePatterns: [
    `${ROOT_DIR}/coverage/`,
    `${ROOT_DIR}/node_modules/`,
  ],
};

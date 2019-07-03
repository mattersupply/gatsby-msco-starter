module.exports = {
  preset: 'ts-jest',
  transform: {
    "^.+\\.tsx?$": "<rootDir>/jest-preprocess.js",
    "^.+\\.jsx?$": "<rootDir>/jest-preprocess.js",
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
  moduleNameMapper: {
    "typeface-*": "identity-obj-proxy",
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js",
    "~components/(.*)": "<rootDir>/src/components/$1",
    "~containers/(.*)": "<rootDir>/src/containers/$1",
    "~styles/(.*)": "<rootDir>/src/styles/$1",
    "~images/(.*)": "<rootDir>/src/images/$1",
    "~lib/(.*)": "<rootDir>/src/lib/$1",
    "~fonts/(.*)": "<rootDir>/src/fonts/$1",
    "~pages/(.*)": "<rootDir>/src/pages/$1",
    "~providers/(.*)": "<rootDir>/src/providers/$1",
    "~store/(.*)": "<rootDir>/src/store/$1",
    "~templates/(.*)": "<rootDir>/src/templates/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["node_modules", ".cache"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  globals: {
    __PATH_PREFIX__: "",
  },
  testURL: "http://localhost",
  setupFiles: ["<rootDir>/loadershim.js"],
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
}

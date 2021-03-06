module.exports = {
  rootDir: "src",
  externals: ["@pacificoseguros/styleguide"],
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: [
    "../node_modules/@testing-library/jest-dom/dist/index.js",
  ],
};

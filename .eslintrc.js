module.exports = {
    extends: [
      'plugin:react/recommended',
      'standard'
    ],
    rules: {
      // suppress errors for missing 'import React' in files
      'react/react-in-jsx-scope': 'off',
      // suppress errors for prop types
      'react/prop-types': 'off',
      // allow jsx syntax in js files (for next.js project)
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }] // should add ".ts" if typescript project
    },
    env: {
      browser: true,
      mocha: true
    }
  }
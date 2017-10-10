#!/usr/bin/env node
'use strict';

const path = require('path');

const commonOptions = {
  args: require.main === module ? process.argv.slice(2) : [],
  command: require('flavored-docker-compose'),
  spawnOptions: {
    stdio: 'inherit'
  }
};

module.exports = configOptions => {
  const options = Object.assign({}, commonOptions, configOptions);
  const plugin = require('flavors-runner/pluginLoader')(options);
  return {
    config: plugin.config,
    run: runOptions => require('flavors-runner/pluginRunner')(plugin, Object.assign({}, options, runOptions))
  };
};

if (require.main === module) {
  module.exports(require(path.resolve(process.cwd(), 'flavorsOptions.js'))).run();
}

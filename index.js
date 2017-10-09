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

module.exports = options => {
  options = Object.assign({}, commonOptions, options);
  const plugin = require('flavors-runner/pluginLoader')(options);
  return {
    config: plugin.config,
    run: () => require('flavors-runner/pluginRunner')(plugin, options)
  };
};

if (require.main === module) {
  module.exports(require(path.resolve(process.cwd(), 'flavorsOptions.js'))).run();
}

[![npm](https://img.shields.io/npm/v/flavored-docker-compose-cli.svg)](https://www.npmjs.com/package/flavored-docker-compose-cli)
[![Build Status](https://travis-ci.org/flavors-js/flavored-docker-compose-cli.svg?branch=master)](https://travis-ci.org/flavors-js/flavored-docker-compose-cli)
[![David](https://img.shields.io/david/flavors-js/flavored-docker-compose-cli.svg)](https://david-dm.org/flavors-js/flavored-docker-compose-cli)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Join the chat at https://gitter.im/flavors-js/flavors](https://badges.gitter.im/flavors-js/flavors.svg)](https://gitter.im/flavors-js/flavors?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# flavored-docker-compose-cli

Run [docker-compose](https://docs.docker.com/compose/) with environment set up by [Flavors](https://github.com/flavors-js/flavors).<br>

## Install

```text
$ npm install -g flavored-docker-compose-cli
```

## Usage

### CLI
Define Flavors [options](https://github.com/flavors-js/flavors#options-parameter) in `flavorsOptions.js` file, for example:
```javascript
module.exports = {
    configName: process.env.configName || 'default',
    workingDir: __dirname
};
```

Run `flavored-docker-compose` in directory where this file is located and `docker-compose` will be executed with environment variables set up by values from configuration files loaded by Flavors.

### Node.js module
```javascript
const dockerCompose = require('flavored-docker-compose-cli')(flavorsOptions);
const config = dockerCompose.config; // configuration loaded by Flavors
dockerCompose.run(); // run docker-compose
```

## Maintainers

- [@mxl](https://github.com/mxl)

## License

See the [LICENSE](https://github.com/flavors-js/flavors-cli/blob/master/LICENSE) file for details.

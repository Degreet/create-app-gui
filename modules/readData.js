const streamToString = require('stream-to-string');

module.exports = async function readData(req) {
	return JSON.parse(await streamToString(req));
};

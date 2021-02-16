const fs = require('fs-extra');

module.exports = async function createProject(location, packName) {
	fs.copy(
		`packs/${packName}`,
		`${location.replace(/\\/g, '/')}/${packName}`
	).then(() => process.exit());
};

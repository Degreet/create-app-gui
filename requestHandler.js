const dialog = require('electron').dialog;
const readData = require('./modules/readData.js');
const createProject = require('./modules/createProject.js');

module.exports = async function requestHandler(req, resp) {
	const { url } = req;

	if (url.startsWith('/api/')) {
		const apiName = url.slice(5);

		if (apiName == 'select-folder') {
			const data = await dialog.showOpenDialog({
				properties: ['openDirectory'],
			});

			resp.end(JSON.stringify({ data }));
		} else if (apiName == 'create-project') {
			const data = await readData(req);
			createProject(data.projectLocation, data.selectedPackName);
			resp.end();
		}
	}
};

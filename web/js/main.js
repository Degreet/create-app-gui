let selectedPackName;
let projectLocation;

templateList.onclick = (e) => {
	let target;

	if (e.target.tagName == 'LI') target = e.target;
	else if (e.target.parentElement.tagName == 'LI')
		target = e.target.parentElement;
	else return;

	selectedPackName = target.dataset.packName;
	firstSection.hidden = true;
	secondSection.hidden = false;
};

selectLocationBtn.onclick = () => {
	fetch('http://localhost:5858/api/select-folder')
		.then((resp) => resp.json())
		.then((answer) => {
			if (!answer.data.canceled) {
				selectedLocationInp.value = projectLocation = answer.data.filePaths[0];
			}
		});
};

createProjectBtn.onclick = () => {
	fetch('http://localhost:5858/api/create-project', {
		method: 'POST',
		body: JSON.stringify({ selectedPackName, projectLocation }),
	});
};

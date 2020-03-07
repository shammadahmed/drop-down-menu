const ddm_triggers = document.querySelectorAll('[data-ddm-trigger-id]');

const ddm_bodies = document.querySelectorAll('[data-ddm-body-id]');

const enableDdm = () => {
	ddm_triggers.forEach(button => button.addEventListener('click', () => {
		ddm_bodies.forEach(body => {
			if (body.dataset.ddmBodyId === button.dataset.ddmTriggerId) {
				body.style.display = toggleDisplay(body);
			}
		});
	}));
};


const toggleDisplay = obj => {
	return obj.style.display === 'none' ? '' : 'none';
};

module.exports = enableDdm;
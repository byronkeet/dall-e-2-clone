import FileSaver from 'file-saver';

import { surpriseMePrompts } from '../constants';

export const getRandomPrompt = (prompt) => {
	const randomPrompt = surpriseMePrompts[Math.floor(Math.random() * surpriseMePrompts.length)];

	if (randomPrompt === prompt) return getRandomPrompt(prompt);

  	return randomPrompt;
};

export const downloadImage = (_id, image) => {
	FileSaver.saveAs(image, `download-${_id}.jpg`);
};
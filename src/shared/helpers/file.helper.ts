export const checkValidationsFiles = async (file: any) => {
	const validationsFiles = {
		// Variable para saber si el archivo esta o no protegido.
		isProtected: false,
		// Variable para saber si el archivo esta o no corrupto.
		isCorrupted: false,
	};

	function readFileAsync(fileToRead) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => {
				resolve(reader.result);
			};
			reader.onerror = reject;
			reader.readAsArrayBuffer(fileToRead);
		});
	}

	const fileBuffer: any = await readFileAsync(file);
	const fileBlob = new Blob([fileBuffer], { type: 'application/pdf' });

	await fileBlob.text().then(textContent => {
		validationsFiles.isProtected = textContent.includes('Encrypt');
		validationsFiles.isCorrupted = !textContent.includes('PDF');
	});

	return validationsFiles;
};

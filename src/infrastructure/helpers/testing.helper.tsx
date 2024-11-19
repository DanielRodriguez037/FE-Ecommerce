import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';

export const renderWithRouter = (ui: ReactElement, renderOptions = {}) => {
	return render(ui, {
		wrapper: MemoryRouter,
		...renderOptions,
	});
};

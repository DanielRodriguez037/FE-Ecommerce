import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@services': path.resolve(__dirname, 'src/shared/services'),
			'@src': path.resolve(__dirname, 'src/'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@modules': path.resolve(__dirname, 'src/modules'),
			'@hooks': path.resolve(__dirname, 'src/shared/hooks'),
			'@helpers': path.resolve(__dirname, 'src/shared/helpers'),
			'@views': path.resolve(__dirname, 'src/shared/ui/views'),
			'@widgets': path.resolve(__dirname, 'src/shared/ui/widgets'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@interfaces': path.resolve(__dirname, 'src/shared/interfaces'),
			'@shared': path.resolve(__dirname, 'src/shared'),
			'@router': path.resolve(__dirname, 'src/router'),
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
});

import { ConfigType } from '../types/Config';

const config: ConfigType = {
	api: {
		url: import.meta.env.VITE_APP_API_URL,
		token: import.meta.env.VITE_APP_API_TOKEN
	}
};

export { config };

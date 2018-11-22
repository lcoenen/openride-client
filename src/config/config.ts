
let env = 'development';

export let settings = {
  name: 'openride-client',
  version: '0.0.2',
  env: 'dev',
	apiEndpoint: 'https://api.openride.tk'
};

if (env === 'production') {
  settings.env = 'prod';
  // other production settings
}

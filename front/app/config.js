export const WDS_PORT = process.env.PORT || 3000;
export const IS_PROD = process.env.NODE_ENV === 'production';
export const SCRIPT_PATH = IS_PROD ? '/' : `http://localhost:${WDS_PORT}/`;
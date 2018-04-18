export const WDS_PORT = process.env.PORT || 3000;
export const IS_PROD = process.env.NODE_ENV === 'production';
export const SCRIPT_PATH = IS_PROD ? '/' : `http://localhost:${WDS_PORT}/`;

//read only token
export const MAPBOX_TOKEN =
  'pk.eyJ1IjoiYmVydGV6IiwiYSI6ImNqZzQ0ODY0dzd2emsyeG1zenMzMHFmbHcifQ.5Sb5fBH-xzXnuZWBvR3q0g';
export const MAP_CENTER = {
  longitude: -75.56359,
  latitude: 6.25184
};

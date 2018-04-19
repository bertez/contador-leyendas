import { css } from 'glamor';

const globalStyles = [
  '@import url("https://fonts.googleapis.com/css?family=Lato:300,400,700");',
  '@import "https://api.tiles.mapbox.com/mapbox-gl-js/v0.41.0/mapbox-gl.css";',
  '* { cursor: url("/media/i_ouija.png") 2 2, pointer; }',
  'html body { padding: 0; margin: 0; font-family: "Lato", sans-serif; }',
  'a { text-decoration: none; }',
  '.simpleContainer .mapboxgl-popup-tip { display: none; }',
  '.simpleContainer .mapboxgl-popup-content { background: rgba(255,255,255, 0.5); padding: 10px 10px 5px; }'
]

for(const rule of globalStyles) {
  css.insert(rule);
}

export const colors = {
  orange: '#FF9800',
  cyan: '#00BCD4',
  red: '#E53935',
  transparentGray: 'rgba(0,0,0,.5)',
  transparentWhite: 'rgba(255,255,255,.7)'
}

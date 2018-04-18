import React, { Component } from 'react';
import glamorous from 'glamorous';
import ReactMapboxGl, { Layer, Feature, Marker, Popup } from 'react-mapbox-gl';
import { Link } from 'react-router-dom';

import { MAP_CENTER, MAPBOX_TOKEN } from '../../config';

import data from '../../data/leyendas.json';

import { colors as c } from '../global-styles';

const { longitude, latitude } = MAP_CENTER;

const GLMap = ReactMapboxGl({ accessToken: MAPBOX_TOKEN });

const { Section, Div, Input, Img, Span } = glamorous;

const realIcon = new Image();
realIcon.src = '/media/i_orange.png';

class Map extends Component {
  constructor() {
    super();

    this.state = {
      popup: null,
      filter: null,
      askForPoint: false,
      newLegend: null
    };
  }

  handleFilter(e) {
    this.setState({ filter: e.target.value });
  }

  handleClick(m, e) {
    if (this.state.askForPoint) {
      const point = e.lngLat;
      this.setState({
        askForPoint: false,
        newLegend: {
          coords: [point.lng, point.lat]
        }
      });
    }
  }

  getFilteredData() {
    const { filter } = this.state;
    if (!filter) return data;

    return data.filter(d => {
      return d.title.indexOf(filter) > -1 || d.text.indexOf(filter) > -1;
    });
  }

  clearPopup() {
    if (this.state.popup) {
      this.setState({ popup: null });
    }
  }

  startCreation() {
    this.setState({
      askForPoint: true
    });
  }

  getReal() {
    return (
      <Layer layout={{ 'icon-image': 'real' }} images={['real', realIcon]}>
        {this.getFilteredData().map((p, i) => (
          <Feature
            key={`fr_${i}`}
            coordinates={p.coords}
            onClick={() =>
              !this.state.newLegend && this.setState({ popup: { ...p } })
            }
          />
        ))}
      </Layer>
    );
  }

  render() {
    const { popup, askForPoint, newLegend } = this.state;
    return (
      <Section>
        <Div
          backgroundColor={c.transparentGray}
          color={'white'}
          fontSize={'2rem'}
          fontWeight={'300'}
          padding={'.5rem 1rem'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Div>El contador de leyendas</Div>
          <Div>
            <Img
              src={'/media/i_search.svg'}
              height={'32px'}
              verticalAlign={'middle'}
            />{' '}
            <Input
              background={'transparent'}
              border={'none'}
              borderBottom={'2px solid white'}
              height={'32px'}
              outline={'none'}
              fontSize={'1.5rem'}
              fontWeight={'300'}
              color={'white'}
              placeholder={'Busca una leyenda'}
              type="text"
              onChange={this.handleFilter.bind(this)}
            />
          </Div>
        </Div>

        {newLegend ? null : (
          <Div
            backgroundColor={c.transparentGray}
            color={'white'}
            fontSize={'2rem'}
            fontWeight={'300'}
            width={'100%'}
            padding={'.5rem 1rem'}
            position={'absolute'}
            bottom={'2rem'}
            boxSizing={'border-box'}
            textAlign={'center'}>
            {askForPoint ? (
              <Span fontSize={'1.2rem'}>
                Haz click en el lugar donde quieres localizar tu leyenda
              </Span>
            ) : (
              <Span
                padding={'.5rem 1rem'}
                backgroundColor={c.cyan}
                color={'white'}
                fontSize={'2rem'}
                textTransform={'lowerCase'}
                onClick={this.startCreation.bind(this)}>
                Cuenta una leyenda
              </Span>
            )}
          </Div>
        )}

        <Div
          position={'absolute'}
          height={'100vh'}
          width={'100vw'}
          top={0}
          left={0}
          zIndex={-1}>
          {/*MAP*/}

          <GLMap
            style="mapbox://styles/mapbox/dark-v9"
            pitch={[60]}
            bearing={[45]}
            zoom={[11]}
            onClick={this.handleClick.bind(this)}
            onDrag={this.clearPopup.bind(this)}
            center={[longitude, latitude]}
            containerStyle={{
              height: '100vh',
              width: '100vw'
            }}>
            {this.getReal()}

            {popup && (
              <Popup coordinates={popup.coords} className="simpleContainer">
                <Div display={'flex'} maxWidth={'24rem'}>
                  <Div marginRight={'1rem'}>
                    <img src={`/media/leyendas/${popup.image}`} />
                  </Div>
                  <Div display={'flex'} flexDirection={'column'}>
                    <Div
                      backgroundColor={c.red}
                      fontSize={'1.4rem'}
                      lineHeight={'130%'}
                      color={'white'}
                      padding={'.3rem'}
                      fontWeight={'bold'}>
                      {popup.title}
                    </Div>
                    <Div fontSize={'1rem'} margin={'1rem 0'}>
                      {popup.intro}
                    </Div>
                    <Div>
                      <Link to={`/map/${popup.id}`}>
                        <Div
                          boxSizing={'border-box'}
                          backgroundColor={'black'}
                          color={'white'}
                          padding={'.5rem 1rem'}
                          fontSize={'1rem'}
                          fontWeight={'bold'}
                          width={'100%'}
                          textAlign={'center'}>
                          Entrar
                        </Div>
                      </Link>
                    </Div>
                  </Div>
                </Div>
              </Popup>
            )}
          </GLMap>
        </Div>
      </Section>
    );
  }
}

export default Map;

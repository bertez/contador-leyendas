import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom';

const { Section, H1, P, Div, Span, Video } = glamorous;

import { colors as c } from '../global-styles';

class Main extends Component {
  render() {
    return (
      <Section
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
        minHeight={'100vh'}>
        <Video
          width={'100%'}
          height={'100%'}
          objectFit={'cover'}
          position={'absolute'}
          zIndex={'-1'}
          src={'/media/main.mp4'}
          controls={false}
          autoPlay={true}
          loop={true}
        />
        <P
          maxWidth={'40%'}
          marginLeft={'10%'}
          paddingTop={'10rem'}
          color={'white'}>
          La leyenda urbana es un relato perteneciente a las nuevas narrativas
          contemporáneas; se trata de un tipo de leyenda o tradición popular, a
          veces emparentable con supersticiones que, a pesar de contener
          elementos sobrenaturales o inverosímiles, es presentado como hechos
          reales sucedidos en la actualidad.
        </P>

        <H1
          backgroundColor={c.transparentGray}
          color={'white'}
          textAlign={'center'}
          fontSize={'3rem'}
          fontWeight={'300'}
          padding={'.5rem 0'}>
          El contador de leyendas
        </H1>

        <Div flexGrow={1} textAlign={'center'}>
          <Link to={'/map'}>
            <Span
              padding={'.5rem 1rem'}
              backgroundColor={c.orange}
              color={'white'}
              fontSize={'2rem'}
              textTransform={'lowerCase'}>
              Entrar
            </Span>
          </Link>
        </Div>

        <Div
          backgroundColor={c.transparentGray}
          color={'white'}
          textAlign={'right'}
          padding={'.3rem 1rem .3rem 0'}>
          Universidad cooperativa de Colombia · DocsBarcelona 2018
        </Div>
      </Section>
    );
  }
}

export default Main;

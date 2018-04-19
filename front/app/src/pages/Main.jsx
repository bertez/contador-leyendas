import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom';

import Person from '../components/Person.jsx';

const { Section, H1, P, Div, Span, Video, Button } = glamorous;

import { colors as c } from '../global-styles';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      credits: false
    };
  }
  render() {
    const { credits } = this.state;

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
          Universidad cooperativa de Colombia · DocsBarcelona 2018 ·{' '}
          <Button
            onClick={() => {
              this.setState({ credits: !credits });
            }}
            outline={'none'}
            border={'none'}
            background={'transparent'}
            color={'white'}
            fontSize={'1rem'}
            padding={0}>
            {credits ? 'Ocultar créditos' : 'Ver créditos'}
          </Button>
        </Div>
        {credits ? (
          <Div
            position={'absolute'}
            display={'flex'}
            backgroundColor={c.transparentGray}
            color={'white'}
            bottom={'29px'}
            width={'100%'}
            padding={'1rem'}
            boxSizing={'border-box'}
            justifyContent={'space-between'}>
            <Person
              name={'Eder A. Acevedo Marín'}
              work={'Mg. Software libre'}
              role={'Apoyo contenidos'}
              facebook={'https://www.facebook.com/ederaam'}
              twitter={'https://twitter.com/ederaam'}
            />
            <Person
              name={'Paolo Andrés Cantillo Largo'}
              work={'Especialista en Gerencia de Mercadeo'}
              role={'Diseñador Web'}
              facebook={'https://www.facebook.com/PaoloAndresCantillo'}
              twitter={'https://twitter.com/paolocantillo'}
            />
            <Person
              name={'Javier Castaño Vera'}
              work={'Comunicador Dramaturgo, Investigador'}
              role={'Narrador'}
              facebook={'https://www.facebook.com/javier.c.vera'}
            />
            <Person
              name={'María Camila Díaz Mendoza'}
              work={'Comunicadora social'}
              role={'Editora, Realizadora audiovisual'}
              facebook={'https://www.facebook.com/camila.diazme'}
              twitter={'https://twitter.com/kamylicious'}
            />
            <Person
              name={'Gina Paola Maestre G.'}
              work={'Mg. en Informática'}
              role={'Apoyo contenidos'}
              facebook={'https://www.facebook.com//ginapaom'}
              twitter={'https://twitter.com/ginapaom'}
            />
            <Person
              name={'Berto Yáñez'}
              work={'Programador de interactividad'}
              role={'Programación'}
              twitter={'https://twitter.com/bertez'}
            />
          </Div>
        ) : null}
      </Section>
    );
  }
}

export default Main;

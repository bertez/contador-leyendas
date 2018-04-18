import React, { Component } from 'react';
import glamorous from 'glamorous';
import { colors } from '../global-styles';
const { Div, Form, Textarea, Button, H1 } = glamorous;

const inputStyles = {
  border: 'none',
  borderBottom: '1px solid black',
  padding: '.5rem',
  fontSize: '1.2rem',
  background: colors.transparentGray,
  marginBottom: '1rem',
  width: '100%',
  boxSizing: 'border-box',
  color: 'white'
};

const buttonStyles = {
  padding: '.5rem 1rem',
  border: 'none',
  color: 'white',
  fontSize: '1.3rem',
  marginRight: '1rem'
};

const CommonInput = glamorous.input(inputStyles);

class NewLegend extends Component {
  constructor() {
    super();

    this.state = {
      error: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    const payload = {
      title: data.get('title'),
      text: data.get('text'),
      tags: data.get('tags'),
      video: data.get('video')
    };

    if (!payload.title || !payload.text) {
      this.setState({
        error: true
      });

      return;
    }

    this.props.action(payload);
  }

  render() {
    return (
      <Div
        position={'absolute'}
        width={'100vw'}
        height={'100vh'}
        top={0}
        left={0}
        background={colors.transparentGray}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        boxSizing={'border-box'}>
        <Form
          width={'40rem'}
          padding={'1rem'}
          backgroundColor={colors.transparentWhite}
          onSubmit={this.handleSubmit.bind(this)}>
          <H1 margin={'0 0 1rem 0'} color={colors.red}>
            Cuenta una leyenda
          </H1>
          <Div>
            <CommonInput type={'text'} name={'title'} placeholder={'Título'} />
          </Div>
          <Div>
            <Textarea
              {...inputStyles}
              height={'10rem'}
              name={'text'}
              placeholder={'Escribe la leyenda'}
            />
          </Div>
          <Div>
            <CommonInput type={'text'} name={'tags'} placeholder={'Tags'} />
          </Div>
          <Div>
            <CommonInput
              type={'text'}
              name={'video'}
              placeholder={'Video de Youtube'}
            />
          </Div>
          <Div>
            <Button {...buttonStyles} backgroundColor={colors.cyan}>
              Enviar
            </Button>
            <Button
              {...buttonStyles}
              backgroundColor={colors.red}
              onClick={this.props.cancel}>
              Cancelar
            </Button>
          </Div>
          {this.state.error ? <Div margin={'1rem 0'} color={colors.red} fontWeight={'bold'}>Faltan datos!</Div> : null}
        </Form>
      </Div>
    );
  }
}

export default NewLegend;

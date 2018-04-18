import React, { Component } from 'react';
import glamorous from 'glamorous';
import axios from 'axios';
import YouTube from 'react-youtube';
import ReactMarkdown from 'react-markdown';
import FacebookProvider, { Comments } from 'react-facebook';

import localData from '../../data/leyendas.json';

import { Link } from 'react-router-dom';

import { colors } from '../global-styles';
const { Div, Form, Textarea, Button, H1 } = glamorous;

const buttonStyles = {
  padding: '.5rem 1rem',
  border: 'none',
  color: 'white',
  fontSize: '1rem'
};

class Legend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      legend: null,
      show: 'video'
    };
  }

  handleTabs(e) {
    e.preventDefault();

    this.setState({
      show: e.target.value
    });
  }

  componentDidMount() {
    this.getLegend();
  }

  async getLegend() {
    const id = this.props.match.params.id;
    let legend;

    if (id.startsWith('real')) {
      legend = localData.find(d => d._id === id);
    } else {
      const creation = await axios.get(`/api/id/${id}`);

      legend = creation.data.data;
    }

    const ytregex = legend.video.match(
      /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
    );

    if (ytregex) {
      legend.videoID = ytregex[1];
    } else {
      this.setState({
        show: 'text'
      });
    }

    this.setState({
      legend
    });
  }

  render() {
    const { legend, show } = this.state;
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
        boxSizing={'border-box'}
        overflow={'auto'}>
        {legend ? (
          <Div width={'42rem'} marginTop={'5rem'}>
            {legend.videoID ? (
              <Div>
                <Button
                  {...buttonStyles}
                  backgroundColor={colors.orange}
                  value={'video'}
                  onClick={this.handleTabs.bind(this)}>
                  Video
                </Button>
                <Button
                  {...buttonStyles}
                  backgroundColor={colors.cyan}
                  value={'text'}
                  onClick={this.handleTabs.bind(this)}>
                  Texto
                </Button>
              </Div>
            ) : null}

            <Div
              padding={'1rem'}
              boxSizing={'border-box'}
              backgroundColor={'black'}>
              <Div display={'flex'} justifyContent={'space-between'}>
                <H1 margin={'0'} color={'white'}>
                  {legend.title}
                </H1>
                <Link to={'/map'}>
                  <Button
                    border={'none'}
                    fontSize={'1.5rem'}
                    fontWeight={'bold'}
                    marginRight={'1rem'}
                    color={'white'}
                    backgroundColor={'transparent'}>
                    X
                  </Button>
                </Link>
              </Div>
              {show === 'video' ? (
                <Div>
                  <YouTube
                    videoId={legend.videoID}
                    opts={{
                      height: '390',
                      width: '640',
                      playerVars: {
                        autoplay: 1
                      }
                    }}
                  />
                </Div>
              ) : (
                <Div color={'white'} fontSize={'1.1rem'}>
                  <ReactMarkdown source={legend.text} />
                </Div>
              )}
              <Div>
                <FacebookProvider appId="971604136338313">
                  <Comments width={'640px'} href={location.href} />
                </FacebookProvider>
              </Div>
            </Div>
          </Div>
        ) : null}
      </Div>
    );
  }
}

export default Legend;

/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */

import React from 'react';
import SideBar from '../components/sidebar';
import Header from '../components/header';
import Realtor from '../components/realtors';
import Features from '../components/features';
import StoryContent from '../components/storyContent';
import StoryPicture from '../components/storyPictures';
import Homes from '../components/homes';
import Gallery from '../components/gallery';
import Footer from '../components/footer';

class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <SideBar />
        <Header />
        <Realtor />
        <Features />
        <StoryPicture />
        <StoryContent />
        <Homes />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default HomePage;

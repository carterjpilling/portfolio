import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  renderGallery() {
    const { images } = this.props;

    if (!images) return;

    const gallery = images.map((obj, i) => {
      return (
        <div key={obj.src}
          className="col-lg-4 col-sm-6"
        >
          <a
            // onClick={}
            className="portfolio-box"
          // href={obj.src}
          >
            <img
              className="img-fluid"
              src={obj.thumbnail}
              alt={obj.description}
              title={obj.title}
            />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">{obj.title}</div>
              <div className="project-name">{obj.desc}</div>
            </div>
          </a>
        </div>
      );
    });

    return (
      <div className="container-fluid p-0">
        <div className="no-gutters">
          {gallery}
        </div>
      </div>
    );
  }
  render() {
    return (
      <>
        {this.renderGallery()}
      </>
    );
  }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  images: PropTypes.array,
};

export default Gallery;

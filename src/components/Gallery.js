import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
          className="gallery-container"
        >
          <div className='portfolio-container'>
            <a
              // onClick={}
              className="portfolio-box"
              href={obj.ref}
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
            <div className='project-descriptions'>
              <p>{obj.info}</p>
              <p>{obj.info2}</p>
              <p>{obj.info3}</p>
            </div>
            <div className="gallery-button-container">
              <a
                href={obj.ref}>
                <button className="external-link-button">Website</button>
              </a>
              <a href={obj.github}>
                <button className="external-link-button">GitHub</button>
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container-fluid p-0">
        <h2 className="text-center mt-0">Projects</h2>
        <hr className="divider my-4" />
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

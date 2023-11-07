import React from 'react';

const IframeComponent = ({ src, width, height }) => {
  return (
    <iframe
      title="External Content"
      className="full-iframe"
      src={src}
      width={width}
      height={height}
      frameBorder="0"
    />
  );
};

export default IframeComponent;
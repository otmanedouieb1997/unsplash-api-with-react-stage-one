import React from 'react';

const ImageList = (props) => {
  console.log(props);
  return (
    <>
      <h1 className="title">images</h1>
      <div className="imagebox">
        {props.images.map((image, index) => (
          <div className="imageitem ui fluid image rounded" key={index}>
            {<img src={image.urls.regular} />}
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageList;

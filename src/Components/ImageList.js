import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
    const Images = props.images.map((image)=> {
        return <img src={image.urls.regular} alt={image.description} key={image.id}/>
    });
    return <div className="image-list">
        {Images}
    </div>
};

export default ImageList;

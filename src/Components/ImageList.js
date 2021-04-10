import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
    const Images = props.images.map((image)=> {
        return <ImageCard image={image}/>
    });
    return <div className="image-list">
        {Images}
    </div>
};

export default ImageList;

import React from 'react';

const ImageList = (props) => {
    const Images = props.images.map((image)=> {
        return <img src={image.urls.regular} alt={image.description} key={image.id}/>
    });
    return <div>
        {Images}
    </div>
};

export default ImageList;

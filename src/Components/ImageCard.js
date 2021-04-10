import react from 'react';

class ImageCard extends react.Component{

    render() {
        return (<div>
            <img src={this.props.image.urls.regular} alt={this.props.image.description}/>
        </div>);
    }
}

export default ImageCard;

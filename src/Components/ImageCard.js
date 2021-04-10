import react from 'react';

class ImageCard extends react.Component{
    constructor(props){
        super(props);
        this.state = {span : 0};
        this.imageRef = react.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpan);
    }

    setSpan = () =>{
        const span = Math.ceil(this.imageRef.current.clientHeight/10);
        this.setState({span});
    };

    render() {
        return (<div style={{gridRowEnd: `span ${this.state.span}`}}>
            <img  ref={this.imageRef} src={this.props.image.urls.regular} alt={this.props.image.description}/>
        </div>);
    }
}

export default ImageCard;

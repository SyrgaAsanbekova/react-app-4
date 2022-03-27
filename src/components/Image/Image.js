import "./Image.css";

function Image(props) {
  const className = ["Image", props.align].join(" ");
  const style = {
    width: props.width,
    height: props.height
  }

  return <img 
    className={className} 
    style={style} 
    src={props.url} />
}

export default Image;
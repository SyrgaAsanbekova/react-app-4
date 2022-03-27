import "./Tooltip.css";

function Tooltip(props) {
  const className = ["Tooltip"];
  if (props.top) {
    className.push('top');
  }
  if (props.left) {
    className.push('left');
  }
  if (props.right) {
    className.push('right');
  }
  return <div className={className.join(" ")}>{props.children}
  <div className="info">{props.info}</div>
  </div>;
}

export default Tooltip;
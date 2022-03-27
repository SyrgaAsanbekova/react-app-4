import "./Button.css";

function Button(props) {
  const className = ["Button"];
  if (props.success) {
    className.push('success');
  }
  if (props.danger) {
    className.push('danger');
  }
  if (props.secondary) {
    className.push('secondary');
  }
  if (props.primary) {
    className.push('primary');
  }
  if (props.warning) {
    className.push('warning');
  }
  if (props.info) {
    className.push('info');
  }
  if (props.light) {
    className.push('light');
  }
  if (props.dark) {
    className.push('dark');
  }
  if (props.link) {
    className.push('link');
  }
  return <button className={className.join(' ')}>{props.children}</button>
}

export default Button;
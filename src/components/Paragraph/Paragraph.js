function Paragraph(props) {
  const style = {
    fontSize: props.size,
    color: props.color
  }

  return <p style={style}>{props.children}</p>;
}

export default Paragraph;
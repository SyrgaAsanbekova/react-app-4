import "./NavBar.css";

function Nav(props) {
  const leftLinks = ["link1", "link2"];
  const rightLinks = [ "link3", "link4", "link5"];

  const left = leftLinks.map((leftLink) => {
    return (
      <li>
        <a href="#">{leftLink}</a>
      </li>
    );
  });
  const right = rightLinks.map((rightLink) => {
    return (
      <li>
        <a href="#">{rightLink}</a>
      </li>
    );
  });

  return (
    <nav className="NavBar">
      <ul>
        <span>{left}</span>
        <span>{right}</span>
      </ul>
    </nav>
  )
}

export default Nav;
import Paragraph from "./components/Paragraph/Paragraph";
import Image from "./components/Image/Image";
import Alert from "./components/Alert/Alert"
import flowersImage from "./Assets/spring-flowers.jpg";
import milkyWayImage from "./Assets/milky-way.jpg";
import Button from "./components/Button/Button";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>

      <Button success>Success</Button>
      <Button danger>Danger</Button>
      <Button secondary>Secondary</Button>
      <Button primary>Primary</Button>
      <Button warning>Warning</Button>
      <Button info>Info</Button>
      <Button light>Light</Button>
      <Button dark>Dark</Button>
      <Button link>Link</Button>

      <br />

      <Tooltip info="Please reply" top>RSVP</Tooltip>
      <Tooltip info="Do it yourself">DIY</Tooltip>
      <Tooltip info="Fear of missing out" left>FOMO</Tooltip>
      <Tooltip info="Thank God it's Friday" right>TGIF</Tooltip>

      <Alert success>A simple success alert!</Alert>
      <Alert danger>A simple danger alert!</Alert>
      <Alert secondary>A simple secondary alert!</Alert>
      <Alert primary>A simple primary alert!</Alert>
      <Alert warning>A simple warning alert!</Alert>
      <Alert info>A simple info alert!</Alert>
      <Alert light>A simple light alert!</Alert>
      <Alert dark>A simple dark alert!</Alert>

      <Image align="left" url={flowersImage} width="150px" height="100px" />
      <Image align="left" url="https://www.thesun.co.uk/wp-content/uploads/2020/09/NINTCHDBPICT000609910500.jpg" width="150px" height="100px" />
      <Image align="right" url={milkyWayImage} width="100px" height="150px" />
      <Image align="right" url="https://photographylife.com/wp-content/uploads/2021/05/DSC_2542.jpg" width="100px" height="150px" />

      <Paragraph size="17px" color="green">This is a large sample paragraph</Paragraph>
      <Paragraph size="14px" color="pink">This is a sample paragraph</Paragraph>
      <Paragraph size=".5rem" color="blue">This is a small sample paragraph</Paragraph>
    </div>
  );
}

export default App;


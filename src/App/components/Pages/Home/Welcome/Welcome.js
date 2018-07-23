import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
import posed from "react-pose";


const config = {
  hovered: { scale: 1.75 },
  idle: { scale: 1 }
};

const Text = posed.div(config);

class Welcome extends Component {
  state = { hovering: false };
  
  render() {
    return (
     <Text
      pose={this.state.hovering ? "hovered" : "idle"}
      onMouseEnter={() => this.setState({ hovering: true })}
      onMouseLeave={() => this.setState({ hovering: false })}>
       <Label size="massive">SPP Welcomes you ...to it's Emporium</Label>
     </Text>
    )
  }
};

export default Welcome;
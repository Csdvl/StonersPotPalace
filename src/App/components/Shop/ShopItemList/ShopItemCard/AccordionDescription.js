import React, {Component} from 'react';
import { Accordion, Icon } from 'semantic-ui-react';


class AccordionDescription extends Component {
  state = { activeIndex: -1 };
  
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    
    this.setState({ activeIndex: newIndex })
  };
  
  render() {
    const { activeIndex } = this.state;
    const {description, title} = this.props;
    
    return (
     <Accordion>
       <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
         <Icon name='dropdown'/>
         {title}
       </Accordion.Title>
       <Accordion.Content active={activeIndex === 0}>
         <p>{description}</p>
       </Accordion.Content>
     </Accordion>
    )
  }
}

export default AccordionDescription;
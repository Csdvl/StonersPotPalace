import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Aux from '../../hoc/auxiliary';
import Toolbar from './Navigation/Toolbar/Toolbar';
// import SideDrawer from '../../components/Navigation/w_SideDrawer/SideDrawer';


class Layout extends Component {
  // state = {
  //   showSideDrawer: false
  // };
  //
  // sideDrawerClosedHandler = () => {
  //   this.setState({ showSideDrawer: false });
  // };
  //
  // sideDrawerToggleHandler = () => {
  //   this.setState((prevState) => {
  //     return { showSideDrawer: !prevState.showSideDrawer }
  //   });
  // };
  
  render() {
    const { isAuth, profile } = this.props;
    const authenticated = isAuth.isLoaded && !isAuth.isEmpty;
    
    return (
     <Aux>
       <Toolbar
        isAuth={authenticated}
        // sideDrawerToggle={this.sideDrawerToggleHandler}
        profile={profile}
       />
       {/*<SideDrawer*/}
        {/*isAuth={authenticated}*/}
        {/*closed={this.sideDrawerClosedHandler}*/}
        {/*show={this.state.showSideDrawer}/>*/}
       <Grid  textAlign='center'>
         <Grid.Column width={10} textAlign='center' style={{marginTop: '72px'}}>
           {this.props.children}
         </Grid.Column>
       </Grid>
       <footer>Footer Copyright @ pula mea || mangiare mi il cazzo</footer>
     </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.firebase.auth,
    profile: state.firebase.profile,
  }
};

export default connect(mapStateToProps)(Layout);
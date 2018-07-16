// import React from 'react';
//
// import classes from './w_SideDrawer.scss';
// import Logo from '../../w_Logo/Logo';
// import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
// import w_Backdrop from '../../UI/w_Backdrop/w_Backdrop';
// import Aux from '../../../hoc/auxiliary';
//
//
// const sideDrawer = (props) => {
//   let attachedClasses = [classes.w_SideDrawer, classes.Close];
//   if ( props.show ) {
//     attachedClasses = [classes.w_SideDrawer, classes.Open];
//   }
//
//   return (
//    <Aux>
//      <w_Backdrop
//       onClick={props.closed}
//       show={props.show}/>
//      <div className={attachedClasses.join(' ')}>
//        <div className={classes.Logo}>
//          <Logo/>
//        </div>
//        <nav>
//          <NavigationItems isAuth={props.isAuth} />
//        </nav>
//      </div>
//    </Aux>
//   );
// };
//
// export default sideDrawer;
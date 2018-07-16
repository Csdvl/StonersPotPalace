import { connect } from 'react-redux'
import { setShopFilter } from '../../../../store/actions/index';
import FilterLink from './FilterLink';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.shopFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setShopFilter(ownProps.filter))
});

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(FilterLink)
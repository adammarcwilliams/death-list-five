import * as Redux from 'redux';
import { connect } from 'react-redux';

import App from '../components/App/App';
import { addTarget } from '../redux/actions/actionCreators';


const mapStateToProps = (state) => {
  return {
    targets: state.targets.targets
  };
};

const mapDispatchToProps = (dispatch) => Redux.bindActionCreators({
  addTarget
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

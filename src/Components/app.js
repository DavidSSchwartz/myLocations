import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../Actions/actionCreators';
import Main from './main';
import {withRouter} from 'react-router';

function mapStateToProps(state){

	return{
		

	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
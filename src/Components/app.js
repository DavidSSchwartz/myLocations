import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../Actions/actionCreators';
import {Main} from './main';
import {withRouter} from 'react-router';

function mapStateToProps(state){

	return{
		topic:state.Topic,
		categoryValue:state.CategoryValue,
		currentCats:state.CurrentCats,
		removedCat:state.RemovedCat,
		editCatValue:state.EditCatValue,
		editCat:state.EditCat,
		newEditValue:state.NewEditValue,
		newValueCats:state.NewValueCats,
		oldValueCats:state.OldValueCats,
		edited:state.Edited,
		locations:state.Locations,
		locationName:state.LocationName,
		locationAddress:state.LocationAddress,
		locationCoordinates:state.LocationCoordinates,
		locationCategory:state.LocationCategory,
		removedLocation:state.RemovedLocation,
		newLocationName:state.NewLocationName,
		newLocationAddress:state.NewLocationAddress,
		newLocationCoordinates:state.NewLocationCoordinates,
		newLocationCategory:state.NewLocationCategory,
		oldLocationValue:state.OldLocationValue,
		alertAddIncomplete:state.AlertAddIncomplete,
		categorySorted:state.CategorySorted,
		choseACatLoc:state.ChoseACatLoc
	

	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
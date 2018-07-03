import actions from './actions';
import { bindActionCreators } from 'redux';


export let mapStateToProps = ( state )=>{
  return state
}
export let mapDispatchToProps = ( dispatch )=>{
  return bindActionCreators( actions, dispatch );
}
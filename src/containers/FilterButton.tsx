import {connect} from 'react-redux';
import Button from '../components/Button';
import {setVisibilityFilter} from '../actions/action';
import { Dispatch } from 'redux';


interface IMapDispatch{
    onClick: () => void
}
interface IOwnProps{
    children:string,
    filter: string
}

const mapDispatchToProps = (dispatch:Dispatch ,ownProps:IOwnProps):IMapDispatch => {
    return{
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    }
    
}

const FilterButton = connect<null, {onClick: () => void},IOwnProps>(null,mapDispatchToProps)(Button);

export default FilterButton;







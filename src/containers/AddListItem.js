import { connect } from 'react-redux';
import { addListItem } from '../actions';
import NewListItem from '../components/NewListItem';

const mapDispatchtoProps = dispatch => {
    return {
        onAddListItem: item => {
            dispatch(addListItem(item));
        }
    }
}

export default connect(
    null,
    mapDispatchtoProps
)(NewListItem);
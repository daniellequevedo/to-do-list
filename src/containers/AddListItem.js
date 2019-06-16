import React from 'react';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addListItem } from '../actions';
import NewListItem from '../components/NewListItem';

// const mapDispatchtoProps = dispatch => {
//     return {
//         onAddListItem: item => {
//             dispatch(addListItem(item));
//         }
//     }
// }

// export default connect(
//     null,
//     mapDispatchtoProps
// )(NewListItem);

const AddListItem = () => {
    const dispatch = useDispatch();
    const onAddListItem = (item) => dispatch(addListItem(item));
    return <NewListItem onAddListItem={onAddListItem} />
}

export default AddListItem;
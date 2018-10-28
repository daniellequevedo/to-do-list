import React, { Component } from 'react';

class ListItemLabel extends Component {

    state = {
        description: this.props.description,
        isEditing: this.props.isEditing
    }

    handleDescriptionChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {

        if (this.props.isEditing) {
            return (
                <input 
                    type="text"
                    name="description"
                    className="item-editing"
                    value={this.props.description} 
                    // onChange={this.handleDescriptionChange} 
                />     
            );
        }

        return (
            <label 
                className="item-description"
                htmlFor={`check-complete-${this.props.id}`}
            >
                {this.props.description}
            </label>
        );
    }
}




export default ListItemLabel;
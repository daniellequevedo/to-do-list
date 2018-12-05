import React, { Component } from 'react';

class NewListItem extends Component {
    state = {
        description: ''
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.description.trim() && this.state) {
            this.props.onAddListItem(this.state)
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            description: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="description"
                    placeholder="Enter a To-Do"
                    onChange={this.handleInputChange}
                    value={this.state.description}
                />
                <button
                    className="add-item"
                    type="submit"
                >
                    Add
                </button>
                <button
                    className="cancel-item"
                    type="button"
                    onClick={this.handleReset}
                >
                    Cancel
                </button>
            </form>
        );
    }
}

export default NewListItem;
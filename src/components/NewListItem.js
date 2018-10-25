import React, { Component } from 'react';

class NewListItem extends Component {
    state = {
        description: '',
        complete: false
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
                    placeholder="description"
                    onChange={this.handleInputChange}
                    value={this.state.description}
                />
                <hr />
                <button
                    type="submit"
                >
                    Add
                </button>
                <button
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
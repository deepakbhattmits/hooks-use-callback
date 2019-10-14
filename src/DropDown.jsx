import React, { Component } from "react";
import { OPTIONS } from "./options";

class DropDown extends Component {
    state = {
        selectedOption: [],
        show: false,
        stopPropagationOnClick: true
    };
    renderOptionDiv = () => {
        return (
            OPTIONS &&
            OPTIONS.map(el => {
                return (
                    <div
                        className="item"
                        key={el.val}
                        id={el.val}
                        title={el.title}
                        onClick={this.handleClickList}
                    >
                        {el.title}
                    </div>
                );
            })
        );
    };
    handleClickList = e => {
        const { title, id } = e.target;
        console.log("TEST", title, id);

        this.setState({
            selectedOption: { ...this.state.selectedOption, [id.toString()]: title }
        });
        if (this.state.stopPropagationOnClick) {
            e.stopPropagation();
        }
    };
    handleClick = e => {
        e.stopPropagation();
        this.setState({ show: !this.state.show });
    };
    handleChange = e => {
        const { value } = e.target;
        console.log(value);
        const selectedOption = e.target.value;
        this.setState({ selectedOption });
    };
    render() {
        return (
            <div
                className={`ui fluid search dropdown selection multiple ${
                    this.state.show ? "active visible" : ""
                    }`}
                onClick={this.handleClick}
            >
                <i className="dropdown icon" />
                <input
                    className="search"
                    autoComplete="off"
                    onChange={this.handleChange}
                    value={this.selectedOption}
                />
                <div
                    className={`menu transition animating slide ${
                        this.state.show ? "in visible" : "out hidden"
                        }`}
                >
                    {this.renderOptionDiv()}
                </div>
                {console.log(this.state.selectedOption)}
            </div>
        );
    }
}
export default DropDown;

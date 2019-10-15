import React, { Component } from "react";
import { OPTIONS } from "./options";

class DropDown extends Component {
    state = {
        selectedOption: [],
        show: false,
        stopPropagationOnClick: true,
        stopPropagationOnRemove: true
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
        const selectedOption = OPTIONS.filter(el => el.title.toLowerCase() === value)
        const { val, title } = selectedOption;
        console.log(selectedOption)
        this.setState({ selectedOption: { ...this.state.selectedOption, [val]: title } });
    };
    removeItem = e => {
        if (this.state.stopPropagationOnRemove) {
            e.stopPropagation();
        }
        const { id } = e.target
        console.log(id)
    }
    render() {
        return (
            <div
                className={`ui fluid search dropdown selection multiple ${
                    this.state.show ? "active visible" : ""
                    }`}
                onClick={this.handleClick}
            >
                <i className="dropdown icon" />
                {this.state.selectedOption && Object.values(this.state.selectedOption).map(el => {

                    return (
                        <label className="ui label transition visible active" key={el} id={el} style={{ 'display': 'inline-block !important' }} onClick={this.removeItem}>{el}
                            <i className="delete icon" />
                        </label>)
                })
                }<input
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

            </div >
        );
    }
}
export default DropDown;

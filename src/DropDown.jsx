import React, { Component } from "react";
import { OPTIONS } from "./options";

class DropDown extends Component {
    state = {
        options: OPTIONS,
        selectedOption: "",
        filteredOptionList: [],
        show: false,
        stopPropagationOnClick: true,
        stopPropagationOnInput: true,
        stopPropagationOnRemove: true
    };
    renderOptionDiv = () => {
        return (
            this.state.options &&
            this.state.options.map(el => {
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
    filteredOption = title => {
        console.log("want REMAIN : ", title);
        const remainingOptions = this.state.options.filter(
            el => el.title !== title
        );
        console.log("REMAIN : ", [...remainingOptions, remainingOptions]);
    };
    handleClickList = e => {
        const { title, id } = e.target;
        const remainingOptions = this.state.options.filter(
            el => el.title !== title
        );
        this.setState(
            {
                filteredOptionList: {
                    ...this.state.filteredOptionList,
                    [id.toString()]: title
                },
                options: remainingOptions
            },
            () => {
                this.filteredOption(title);
            }
        );
        if (this.state.stopPropagationOnClick) {
            e.stopPropagation();
        }
    };
    handleClick = e => {
        e.stopPropagation();
        this.setState({ show: !this.state.show });
    };
    handleChangeInput = e => {
        const { value } = e.target;
        const selectedOption = OPTIONS.filter(
            el => el.title.toLowerCase().indexOf(value.toLowerCase()) > -1
        );
        console.log("this is : ", selectedOption);
        // this.setState({
        //   selectedOption: {
        //     ...this.state.selectedOption,
        //     [selectedOption]: selectedOption
        //   }
        // });
        if (this.state.stopPropagationOnInput) {
            e.stopPropagation();
        }
    };
    removeItem = e => {
        if (this.state.stopPropagationOnRemove) {
            e.stopPropagation();
        }
        const { id } = e.target;
        const remainingOptions = this.state.options.filter(el =>
            console.log("TEST :", typeof el.title)
        );
        console.log(typeof id, "want added again: ", remainingOptions);
    };
    KeyUp = e => {
        console.log("keyup", e.target.value);
        const { value } = e.target;
        const selectedOption = OPTIONS.filter(
            el => el.title.toLowerCase().indexOf(value.toLowerCase()) > -1
        );
        console.log(selectedOption);
        this.setState(
            { options: selectedOption, selectedOption: "", show: true },
            () => {
                this.renderOptionDiv();
            }
        );
        if (e.keyCode === 13) {
            // this.setState({filteredOptionList: {...this.state.filteredOptionList,e.target.value})
        }
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
                {this.state.filteredOptionList &&
                    Object.values(this.state.filteredOptionList).map((el, i) => {
                        return (
                            <label
                                className="ui label transition visible active label"
                                key={i}
                                style={{ display: "inline-block !important" }}
                                onClick={this.removeItem}
                            >
                                {el}
                                <i id={el} className="delete icon" />
                            </label>
                        );
                    })}
                <input
                    className="search"
                    autoComplete="off"
                    onChange={this.handleChangeInput}
                    onKeyUp={this.KeyUp}
                    value={this.selectedOption}
                />
                <div
                    className={`menu transition animating slide ${
                        this.state.show ? "in visible" : "out hidden"
                        }`}
                >
                    {this.renderOptionDiv()}
                </div>
            </div>
        );
    }
}
export default DropDown;

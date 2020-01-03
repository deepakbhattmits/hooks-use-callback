import React from 'react';
import { mount } from 'enzyme';

const TestHook = ({ callback }) => {
    callback();
    return null;
};

export const testHook = (callback) => {
    // console.log(callback)
    mount(<TestHook callback={callback} />);
};
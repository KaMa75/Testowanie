import React from 'react';
import {shallow} from 'enzyme';

import Counter from './Counter';


describe('Test Counter component', () => {
    const startCount = 22;

    const wrapperWithoutProps = shallow(<Counter />);
    const wrapperWithProps = shallow(<Counter start={startCount} />);
    const addButton = wrapperWithProps.find('.button-add');
    const subtractButton = wrapperWithProps.find('.button-sub');
    const resetButton = wrapperWithProps.find('.button-reset');
    const setButton = wrapperWithProps.find('.button-set');
    const inputField = wrapperWithProps.find('input');

    it('Should count state equal 0 when doesn\'t start prop', () => {
        expect(wrapperWithoutProps.state('count')).toBe(0);
    });

    it('Should count state equal start prop value', () => {
        expect(wrapperWithProps.state('count')).toBe(startCount);
    });

    it('Should have add and subtract buttons', () => {
        expect(addButton.length === 1 && subtractButton.length === 1).toBe(true);
    });

    it('Should increment count state after click add button', () => {
        addButton.simulate('click');
        addButton.simulate('click');
        const countValueView = wrapperWithProps.find('h2');
        expect(countValueView.text()).toBe(`${startCount + 2}`);
    });

    it('Should count state equal start prop after click reset button', () => {
        resetButton.simulate('click');
        const countValueView = wrapperWithProps.find('h2');
        expect(countValueView.text()).toBe(`${startCount}`);
    });

    it('Should decrement count state after click subtract button', () => {
        subtractButton.simulate('click');
        subtractButton.simulate('click');
        subtractButton.simulate('click');
        const countValueView = wrapperWithProps.find('h2');
        expect(countValueView.text()).toBe(`${startCount - 3}`);
    });

    it('Should count state equal input value after click set button', () => {
        const inputValue = 18;
        inputField.simulate('change', {target: {value: inputValue}});
        setButton.simulate('click');
        const countValueView = wrapperWithProps.find('h2');
        expect(countValueView.text()).toBe(`${inputValue}`);
    });

});

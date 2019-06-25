import React from 'react';
import enzyme from "enzyme";
import App  from '../App';

describe('App.js', () => {

    it('should displayed successfully', () => {
        const container = enzyme.mount(<App />);
        expect(container.length).toEqual(1);
    });

});
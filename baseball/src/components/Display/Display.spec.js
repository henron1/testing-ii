import React from 'react';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe("<Display />", () => {
    it("should display all the counts", () => {
        const {getByTestId, rerender} = render (
            <Display stateOnProps={{strikes:0}} />
        );
        const strikes = getByTestId("strikes");
        expect(strikes.textContent).toBe(0);

        
    })
})
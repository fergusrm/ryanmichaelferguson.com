import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import App from "./App.js";

expect.extend(toHaveNoViolations);

describe('App', () => {
    it('should pass jest-axe accessibility testing', async () => {
        render(<App/>, document.body);
        const results = await axe(document.body);
        expect(results).toHaveNoViolations();
    });
});
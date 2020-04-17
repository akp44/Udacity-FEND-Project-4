
global.fetch = require("jest-fetch-mock");

const spyFunc = jest.fn();

Object.defineProperty(global.document, "getElementById", { value: spyFunc });
spyFunc.mockReturnValue({ innerHTML: "", className: "" });

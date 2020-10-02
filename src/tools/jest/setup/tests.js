import React from 'react';
import idObj from 'identity-obj-proxy';

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { testEpic, shallow, shallowSnapshot } from 'test/utils';

// ========================================================
// Fixes
// ========================================================

// FIX 1: Fix for "matchMedia not present, legacy browsers require a polyfill"
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// ========================================================
// Enzyme configuration
// ========================================================
Enzyme.configure({ adapter: new EnzymeAdapter() });

// ========================================================
// Global objects
// ========================================================
global.React = React;
global.idObj = idObj;
global.shallow = shallow;
global.shallowSnapshot = shallowSnapshot;

// ========================================================
// Test utilities
// ========================================================
global.testEpic = testEpic;

// ========================================================
// Fail tests on any warning
// ========================================================
console.error = (message) => throw new Error(message);

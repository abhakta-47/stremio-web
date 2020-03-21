const React = require('react');
const isEqual = require('lodash.isequal');

const useDeepEqualMemo = (cb, deps) => {
    const valueRef = React.useRef(cb());
    const prevDepsRef = React.useRef(deps);
    if (!isEqual(prevDepsRef.current, deps)) {
        valueRef.current = cb();
        prevDepsRef.current = deps;
    }
    return valueRef.current;
};

module.exports = useDeepEqualMemo;

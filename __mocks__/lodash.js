const lodash = jest.genMockFromModule('lodash');

lodash.head = arr => 5; // eslint-disable-line

export default lodash;

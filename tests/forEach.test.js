const forEach = require('../src/forEach');

describe('forEach', () => {
  // Test that your callback is invoked for each array entry
  it('Should invoke callback for each array entry', () => {
    let array = [1,2,3];
    let mockCallback = jest.fn();

    forEach(array, mockCallback);

    expect(mockCallback).toHaveBeenCalledTimes(3);
  });

  // Test that your callback arguments are provided accurately
  it('Should provide callback arguments accurately', () => {
    let array = [1,2,3];
    let mockCallback = jest.fn();

    forEach(array, mockCallback);

    expect(mockCallback).toHaveBeenCalledWith(1, 0, array);
    expect(mockCallback).toHaveBeenCalledWith(2, 1, array);
    expect(mockCallback).toHaveBeenCalledWith(3,2, array);
  });
});
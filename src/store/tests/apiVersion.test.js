import apiVersion, { setVersion, initialState } from '../apiVersionSlice';

describe('apiVersion reducer', () => {
  it('should handle initial state', () => {
    expect(apiVersion(undefined, {})).toEqual({
      version: '',
    });
  });

  it('should handle setVersion', () => {
    expect(
      apiVersion(initialState, {
        type: setVersion.type,
        payload: '10.1',
      }),
    ).toEqual({
      version: '10.1',
    });
  });
});

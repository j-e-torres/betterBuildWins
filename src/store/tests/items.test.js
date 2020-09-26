import items, {
  getItemsFail,
  getItemsSuccess,
  initialState,
} from '../itemsSlice';

describe('items reducer', () => {
  it('should handle initial state', () => {
    expect(items(undefined, {})).toEqual({
      items: {},
      error: null,
    });
  });

  it('should handle getItemsSuccess', () => {
    expect(
      items(initialState, {
        type: getItemsSuccess.type,
        payload: {
          1001: {
            name: 'Boots of Speed',
            maps: {
              10: true,
              11: true,
              12: true,
            },
            stats: {
              FlatMovementSpeedMod: 25,
            },
          },
          1004: {
            name: 'Faerie Charm',
            maps: {
              10: true,
              11: true,
              12: true,
            },
            stats: {},
          },
        },
      }),
    ).toEqual({
      items: {
        1001: {
          name: 'Boots of Speed',
          maps: {
            10: true,
            11: true,
            12: true,
          },
          stats: {
            FlatMovementSpeedMod: 25,
          },
        },
        1004: {
          name: 'Faerie Charm',
          maps: {
            10: true,
            11: true,
            12: true,
          },
          stats: {},
        },
      },
      error: null,
    });
  });

  it('should handle getItemsFail', () => {
    expect(
      items(initialState, {
        type: getItemsFail.type,
        payload: {
          error: 'bruh cant get connection to api',
        },
      }),
    ).toEqual({
      items: {},
      error: {
        error: 'bruh cant get connection to api',
      },
    });
  });
});

import champions, {
  getChampionsSuccess,
  getChampionsFail,
  initialState,
} from '../championsSlice';

describe('champions reducer', () => {
  it('should handle initial state', () => {
    expect(champions(undefined, {})).toEqual({
      champions: {},
      error: null,
    });
  });

  it('should handle getChampionsSuccess', () => {
    expect(
      champions(initialState, {
        type: getChampionsSuccess.type,
        payload: {
          Aatrox: {
            version: '9.3.1',
            id: 'Aatrox',
            stats: {
              hp: 580,
            },
          },

          Ahri: {
            version: '9.3.1',
            id: 'Ahri',
            stats: {
              hp: 500,
            },
          },
        },
      }),
    ).toEqual({
      champions: {
        Aatrox: {
          version: '9.3.1',
          id: 'Aatrox',
          stats: {
            hp: 580,
          },
        },

        Ahri: {
          version: '9.3.1',
          id: 'Ahri',
          stats: {
            hp: 500,
          },
        },
      },
      error: null,
    });
  });

  it('should handle getChampionsFail', () => {
    expect(
      champions(initialState, {
        type: getChampionsFail.type,
        payload: {
          error: 'bruh cant get connection to api',
        },
      }),
    ).toEqual({
      champions: {},
      error: {
        error: 'bruh cant get connection to api',
      },
    });
  });
});

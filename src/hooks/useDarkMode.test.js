import { act, renderHook } from '@testing-library/react-hooks';
import { THEMES } from 'themes';
import { storage } from 'utils/storage';
import { useDarkMode } from './useDarkMode';

jest.mock('utils/storage');

describe('useDarkMode', () => {
  it('toggletheme', () => {
    const { result } = renderHook(useDarkMode);
    expect(result.current.theme.title).toBe(THEMES.DARK);
    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme.title).toBe(THEMES.LIGHT);
    expect(storage.set).toBeCalledTimes(1);
  });
});

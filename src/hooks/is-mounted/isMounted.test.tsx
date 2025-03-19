import { renderHook,  } from '@testing-library/react';
import { isMounted } from './isMounted';

describe('isMounted', () => {
  it('컴포넌트 mount가 완료된 이후 isMounted는 true를 반환합니다.', () => {
    const {result} = renderHook(() => isMounted(), { initialProps: false });

    expect(result.current).toBe(true);
  });
});

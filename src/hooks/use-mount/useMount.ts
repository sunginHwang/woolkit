import { type EffectCallback, useEffect } from 'react';

/**
 * mount 시점만 effect 할시 사용
 * mount 시점에만 사용해야하는 특이케이스가 존재해서 effect만으로 구성할경우 lint를 보고 deps를 넣어 의도치 않은 이슈가 있을수 있음
 * 해당 훅으로 사용하여 명확하게 mount 시점 사용을 알림
 */
export const useMount = (effect_callback: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect_callback, []);
};

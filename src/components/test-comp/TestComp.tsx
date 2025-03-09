import { ReactElement } from 'react';

export type Key = string | number | symbol;

export interface TestCompProps<Case extends Key> {
  value: Case;
  case: Partial<Record<Case, ReactElement>>;
  default?: ReactElement;
}

/**
 * @description
 * 테스트용컴포넌트
 * @module components/test-comp

 * @param value - switch case 에 따라서 랜더링 할 컴포넌트를 결정하는 값입니다.
 * @param case - switch case 에 따라서 랜더링 할 컴포넌트를 정의하는 객체입니다.
 * @param default - switch case 에 해당되는 값이 없을 때 랜더링 할 컴포넌트 입니다. (fallback)
 * @example
 *   <TestComp
 *     value={status}
 *     case={{
 *       a: <TypeA />,
 *       b: <TypeB />,
 *       c: <TypeC />,
 *     }}
 *     default={<Default />}
 *   />
 *
 *
 */
export const TestComp = <Case extends Key>({ value, case: case_lookup, default: default_case }: TestCompProps<Case>) => {
  return case_lookup[value] ?? default_case ?? null;
};

import { ReactElement } from 'react';

export type Key = string | number | symbol;

export interface SwitchCaseProps<Case extends Key> {
  value: Case;
  case: Partial<Record<Case, ReactElement>>;
  default?: ReactElement;
}

/**
 * @description
 * switch 를 통해 case 마다 컴포넌트 랜더링 하는 케이스를 편하리하게 사용하기 위한 컴포넌트 입니다.
 * @module components/switch-case
 * @param value - switch case 에 따라서 랜더링 할 컴포넌트를 결정하는 값입니다.
 * @param case - switch case 에 따라서 랜더링 할 컴포넌트를 정의하는 객체입니다.
 * @param default - switch case 에 해당되는 값이 없을 때 랜더링 할 컴포넌트 입니다. (fallback)
 * @example
 *   <SwitchCase
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
export const SwitchCase = <Case extends Key>({ value, case: case_lookup, default: default_case }: SwitchCaseProps<Case>) => {
  return case_lookup[value] ?? default_case ?? null;
};

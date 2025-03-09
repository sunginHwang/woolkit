# SwitchCase()

```ts
function SwitchCase<Case>(__namedParameters): 
  | null
| ReactElement<unknown, string | JSXElementConstructor<any>>
```

## Type Parameters

| Type Parameter |
| ------ |
| `Case` *extends* `Key` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `SwitchCaseProps`\<`Case`\> |

## Returns

  \| `null`
  \| `ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\>

## Description

switch 를 통해 case 마다 컴포넌트 랜더링 하는 케이스를 편하리하게 사용하기 위한 컴포넌트 입니다.

## Example

```ts
<SwitchCase
    value={status}
    case={{
      a: <TypeA />,
      b: <TypeB />,
      c: <TypeC />,
    }}
    default={<Default />}
  />
```

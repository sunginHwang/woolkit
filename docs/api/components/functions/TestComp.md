# TestComp()

```ts
function TestComp<Case>(__namedParameters): 
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
| `__namedParameters` | `TestCompProps`\<`Case`\> |

## Returns

  \| `null`
  \| `ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\>

## Description

테스트용컴포넌트

## Example

```ts
<TestComp
    value={status}
    case={{
      a: <TypeA />,
      b: <TypeB />,
      c: <TypeC />,
    }}
    default={<Default />}
  />
```

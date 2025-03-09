# useMount()

```ts
function useMount(effect_callback): void
```

mount 시점만 effect 할시 사용
mount 시점에만 사용해야하는 특이케이스가 존재해서 effect만으로 구성할경우 lint를 보고 deps를 넣어 의도치 않은 이슈가 있을수 있음
해당 훅으로 사용하여 명확하게 mount 시점 사용을 알림

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `effect_callback` | `EffectCallback` | mount 시점에 실행할 콜백함수 |

## Returns

`void`

## Example

```typescript
const CompoA = () => {
  useMount(() => {
  console.log("mount");  
  });

  return <div>CompoA</div>;
};
```

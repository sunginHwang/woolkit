import { useState } from "react"
import { useMount } from "../use-mount/useMount";


export const isMounted = () => {
  const [is_mounted, setIsMounted] = useState(false);

  useMount(() => {
    console.log('mounted!!');
    setIsMounted(true);
  });

  return is_mounted;
}

import { useEffect } from 'react'

export default function useEventListener(
  event: string,
  handler: EventListener
) {
  useEffect(
    () => {
      // create the event handler
      window.addEventListener(event, handler)

      // any time a state variable or prop changes, remove the listener in preparation for a new one to be set.
      return () => {
        window.removeEventListener(event, handler)
      }
    },
    // define what state variables and prop changes should run the above code.
    [handler, event]
  )
}

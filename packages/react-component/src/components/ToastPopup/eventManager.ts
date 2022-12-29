import { Callback, EventManager, TimeoutId, Event } from '.'

export const eventManager: EventManager = {
  list: new Map(),
  emitQueue: new Map(),

  on(event: Event, callback: Callback) {
    this.list.has(event) || this.list.set(event, [])
    this.list.get(event)!.push(callback)
    return this
  },

  off(event: Event, callback: Callback) {
    if (callback) {
      const cb = this.list.get(event)!.filter((cb) => cb !== callback)
      this.list.set(event, cb)
      return this
    }
    this.list.delete(event)
    return this
  },

  cancelEmit(event: Event) {
    const timers = this.emitQueue.get(event)
    if (timers) {
      timers.forEach(clearTimeout)
      this.emitQueue.delete(event)
    }

    return this
  },

  emit(event: Event, ...args: any[]) {
    this.list.has(event) &&
      this.list.get(event)!.forEach((callback: Callback) => {
        const timer: TimeoutId = setTimeout(() => {
          // @ts-ignore
          callback(...args)
        }, 0)

        this.emitQueue.has(event) || this.emitQueue.set(event, [])
        this.emitQueue.get(event)!.push(timer)
      })
  },
}

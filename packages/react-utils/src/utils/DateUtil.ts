import { DateTime } from 'luxon'

export function convertISOToDateTime(iso?: string | null, format = 'yyyy-MM-dd') {
  if (iso) {
    return DateTime.fromISO(iso).toFormat(format)
  }
  return undefined
}

export function getCurrentISOTime(): string {
  return DateTime.now().startOf('day').toISO()
}

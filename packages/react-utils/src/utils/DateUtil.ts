import { DateTime } from 'luxon'

export function isoToDateTime(iso?: string | null, format = 'yyyy-MM-dd') {
  if (iso) {
    return DateTime.fromISO(iso).toFormat(format)
  }
  return undefined
}

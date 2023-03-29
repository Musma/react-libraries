import { DateTime } from 'luxon'

/**
 *
 * @param iso
 * @param format
 * @returns
 */

const DEFAULT_FORMAT = 'yyyy-MM-dd'

export const convertIsoToFormat = (isoDate?: string | null, format = DEFAULT_FORMAT) => {
  if (isoDate) {
    return DateTime.fromISO(isoDate).toFormat(format)
  }
  return undefined
}

/**
 * @returns
 */
export const generateFromTo = (): [string, string] => {
  const from = DateTime.now().startOf('month').startOf('day').toUTC().toISO()
  const to = DateTime.now().endOf('day').toUTC().toISO()

  return [from, to]
}

/**
 * @param isoDate
 * @returns ISO를 UTC로 변환하여 string으로 리턴합니다.
 */
export const convertIsoToUtc = (isoDate: string): string => {
  return DateTime.fromISO(isoDate).toUTC().toISO()
}

/**
 * @param isoDate ISO String
 * @param format 변환할 날짜 포맷 ex)yyyy-MM-dd
 * @returns ISO를 UTC로 변환한 후 포맷에 맞춰 string으로 리턴합니다.
 */
export const convertIsoToUtcToFormat = (isoDate: string, format = DEFAULT_FORMAT): string => {
  return DateTime.fromISO(isoDate).toUTC().toFormat(format)
}

/**
 * UTC to ISO 변환
 * @param utcDate
 * @param format default date(yyyy-MM-dd), dateTime(yyyy-MM-dd HH:mm:ss)
 * @returns
 */
export const convertUtcToFormat = (utcDate?: string, format = 'yyyy-MM-dd') => {
  return utcDate ? DateTime.fromISO(new Date(utcDate).toISOString()).toFormat(format) : '-'
}

/**
 *
 */
export const convertUtcToIso = (utcDate: string) => {
  return DateTime.fromISO(new Date(utcDate).toISOString()).toISO()
}

/**
 *
 * @returns
 */
export function getCurrentISOTime(): string {
  return DateTime.now().startOf('day').toISO()
}

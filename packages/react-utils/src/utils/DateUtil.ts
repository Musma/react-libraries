import { DateTime } from 'luxon'

/**
 *
 * @param iso
 * @param format
 * @returns
 */

const DEFAULT_FORMAT = 'yyyy-MM-dd'

/**
 *
 * @param isoDate (example) '2023-02-01T09:00:00.620+09:00'
 * @param format (default) 'yyyy-MM-dd', (example) 'HH:mm:ss'
 * @returns (return example) '2023-02-01'
 */
export const convertIsoToFormat = (isoDate?: string | null, format = DEFAULT_FORMAT) => {
  if (isoDate) {
    return DateTime.fromISO(isoDate).toFormat(format)
  }
  return undefined
}

/**
 * @description '월 초 ~ 금일' 까지 UTC로 변환한 시간을 반환합니다
 * @returns (example) ['2023-01-30T15:00:00.000Z', '2023-02-01T14:59:59.999Z']
 */
export const generateFromTo = (): [string, string] => {
  const from = DateTime.now().startOf('month').startOf('day').toUTC().toISO()
  const to = DateTime.now().endOf('day').toUTC().toISO()

  return [from, to]
}

/**
 * @description ISO를 UTC로 변환하여 string으로 리턴합니다.
 * @param isoDate (example) '2023-02-01T09:00:00.620+09:00'
 * @returns (return example) '2023-02-01T00:00:00.620Z'
 */
export const convertIsoToUtc = (isoDate: string): string => {
  return DateTime.fromISO(isoDate).toUTC().toISO()
}

/**
 * @description ISO를 UTC로 변환한 후 포맷에 맞춰 string으로 리턴합니다.
 * @param isoDate (example) '2023-02-01T00:00:00.620+09:00'
 * @param format (default) 'yyyy-MM-dd', (example) 'HH:mm:ss'
 * @returns (return example) '2023-01-31'
 */
export const convertIsoToUtcToFormat = (isoDate: string, format = DEFAULT_FORMAT): string => {
  return DateTime.fromISO(isoDate).toUTC().toFormat(format)
}

/**
 * @description UTC를 ISO로 변환한 후 포맷에 맞춰 string으로 리턴합니다.
 * @param utcDate (example) '2023-02-01T15:00:00.620Z'
 * @param format (default) 'yyyy-MM-dd', (example) 'HH:mm:ss'
 * @returns (return example) '2023-02-02'
 */
export const convertUtcToFormat = (utcDate?: string, format = DEFAULT_FORMAT) => {
  return utcDate ? DateTime.fromISO(new Date(utcDate).toISOString()).toFormat(format) : '-'
}

/**
 * @description UTC를 ISO로 변환한 후 string으로 리턴합니다.
 * @param utcDate (example) '2023-02-01T15:00:00.620Z'
 * @returns (return example) '2023-02-02T00:00:00.620+09:00'
 */
export const convertUtcToIso = (utcDate: string) => {
  return DateTime.fromISO(new Date(utcDate).toISOString()).toISO()
}

/**
 * @description 금일의 00시를 ISO로 변환하여 string으로 리턴합니다
 * @returns (return example) '2023-02-02T00:00:00.620+09:00'
 */
export function getCurrentISOTime(): string {
  return DateTime.now().startOf('day').toISO()
}

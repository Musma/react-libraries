export type Partial<T> = {
  [P in keyof T]?: T[P]
}

export interface Id {
  id: string // uniqueId()로 유니크 아이디 전달
}

export interface CommonOptions {
  closeOnClick?: boolean
  autoClose?: number | false
  containerId?: Id
}

import { IToastPopupData } from '.'

// 지금은 IToastPopupData로 받지만, id만 받는 형태로 바꿔도 될 듯
class ToastPopupManager {
  private popupList: Map<string, IToastPopupData> = new Map()
  private queue: IToastPopupData[] = []
  private limit = 5

  get list() {
    const list: IToastPopupData[] = []
    this.popupList.forEach((item) => list.unshift(item))
    return list
  }

  public add(toastPopup: IToastPopupData): IToastPopupData[] {
    if (!this.popupList.has(toastPopup.id)) {
      // 제한 갯수에 걸리면 대기열로 추가
      if (this.checkLimit()) {
        this.enqueue(toastPopup)
        // 제한 갯수에 걸리지 않으면 리스트에 추가
      } else {
        this.popupList.set(toastPopup.id, toastPopup)
      }
    }
    return this.list
  }

  public remove(toastPopup: IToastPopupData): IToastPopupData[] {
    if (this.popupList.has(toastPopup.id)) {
      this.popupList.delete(toastPopup.id)
      this.dequeue()
    }
    return this.list
  }

  /**
   * 제한 갯수에 걸리는지 확인
   * @returns 걸린다(true) / 안걸린다(false)
   */
  private checkLimit(): boolean {
    if (this.popupList.size >= this.limit) {
      return true
    }
    return false
  }

  /**
   * 대기열에 팝업이 있는지 확인
   * @returns 있다(true) / 없다(false)
   */
  private checkQueue(): boolean {
    if (this.queue?.[0]) {
      return true
    }
    return false
  }

  /**
   * 토스트 팝업 갯수가 제한에 도달했을 때 queue(대기열)로 이동
   */
  private enqueue(toastPopup: IToastPopupData): void {
    this.queue.push(toastPopup)
  }

  /**
   * 토스트 팝업이 삭제될 때 queue(대기열)에 팝업이 있다면 가져오기
   */
  private dequeue(): void {
    if (this.checkQueue()) {
      const target = this.queue.shift() as IToastPopupData
      this.add(target)
    }
  }
}

export const toastPopupManager = new ToastPopupManager()

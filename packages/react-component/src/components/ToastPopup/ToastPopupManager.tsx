import { IToastPopupData } from '.'

// 지금은 IToastPopupData로 받지만, id만 받는 형태로 바꿔도 될 듯
class ToastPopupManager {
  private popupList: Map<number, IToastPopupData> = new Map()

  get list() {
    const list: IToastPopupData[] = []
    this.popupList.forEach((item) => list.unshift(item))
    return list
  }

  public add(toastPopup: IToastPopupData): IToastPopupData[] {
    if (!this.popupList.has(toastPopup.id)) {
      this.popupList.set(toastPopup.id, toastPopup)
    }
    return this.list
  }

  public remove(toastPopup: IToastPopupData): IToastPopupData[] {
    if (this.popupList.has(toastPopup.id)) {
      this.popupList.delete(toastPopup.id)
    }
    return this.list
  }
}

export const toastPopupManager = new ToastPopupManager()

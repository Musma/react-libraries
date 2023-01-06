import { IToastPopupData, IToastPopupInstance } from '.'

// 지금은 IToastPopupData로 받지만, id만 받는 형태로 바꿔도 될 듯
class ToastPopupManager {
  private popupList: Map<string, IToastPopupInstance> = new Map()

  get list() {
    const list: IToastPopupInstance[] = []
    this.popupList.forEach((item) => list.unshift(item))
    return list
  }

  public get(id: string) {
    return this.popupList.get(id)
  }

  public add(toastPopup: IToastPopupInstance): IToastPopupInstance[] {
    if (!this.popupList.has(toastPopup.id)) {
      this.popupList.set(toastPopup.id, toastPopup)
    }
    return this.list
  }

  public edit(toastPopup: IToastPopupInstance) {
    this.popupList.set(toastPopup.id, toastPopup)
    return this.list
  }

  public remove(toastPopup: IToastPopupData): IToastPopupInstance[] {
    if (this.popupList.has(toastPopup.id)) {
      this.popupList.delete(toastPopup.id)
    }
    return this.list
  }
}

export const toastPopupManager = new ToastPopupManager()

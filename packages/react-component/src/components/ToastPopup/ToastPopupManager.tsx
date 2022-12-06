import { IToastPopupList } from '.'

class ToastPopupManager {
  private popupList: Map<number, IToastPopupList> = new Map()

  get list() {
    const list: IToastPopupList[] = []
    this.popupList.forEach((item) => list.unshift(item))
    return list
  }

  // ToastPopup이 componentDidMount 될 때 popupId를 인자로 받아서 넣어놓음
  public add(toastPopup: IToastPopupList) {
    if (!this.popupList.has(toastPopup.id)) {
      this.popupList.set(toastPopup.id, toastPopup)
    }
  }

  // ToastPopup이 componentWillUnmount 될 때 popupId를 인자로 받아서 지움
  public remove(toastPopup: IToastPopupList) {
    if (this.popupList.has(toastPopup.id)) {
      this.popupList.delete(toastPopup.id)
    }
  }
}

export const toastPopupManager = new ToastPopupManager()

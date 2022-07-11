export default class ModalManager {
  private modals: HTMLDivElement[] = []
  constructor() {
    this.modals = []
  }
  add(modal: HTMLDivElement) {
    if (this.modals.indexOf(modal) !== -1) {
      return
    }
    this.modals.push(modal)
  }
  pop() {
    this.modals.pop()
  }
  isTopModal(modal: HTMLDivElement): boolean {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal
  }
}

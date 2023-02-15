export class ModalManager {
  private modalIds: string[] = []

  // modalIds로 Set을 만듬
  get modalIdSet() {
    return new Set(this.modalIds)
  }

  // Modal이 componentDidMount 될 때 modalId를 인자로 받아서 넣어놓음
  public add(modalId: string) {
    if (!this.modalIdSet.has(modalId)) {
      this.modalIds = [...this.modalIds, modalId]
    }
  }

  // Modal이 componentWillUnmount 될 때 modalId를 인자로 받아서 지움
  public remove(modalId: string) {
    if (this.modalIdSet.has(modalId)) {
      const newSet = new Set(this.modalIdSet)

      if (newSet.delete(modalId)) {
        const values = Array.from(newSet.values())
        this.modalIds = values
      }
    }
  }

  // 현재 모달이 최상위 모달인지 체크
  public isTopModal(modalId: string) {
    return this.modalIds.length > 0 && this.modalIds[this.modalIds.length - 1] === modalId
  }
}

import { useState } from 'react'

import { IToastPopupData } from './ToastPopupTypes'

export const useToastPopup = () => {
  const [newToastPopup, setNewToastPopup] = useState<IToastPopupData>()

  const toast = (newToastPopup: IToastPopupData) => {
    setNewToastPopup(newToastPopup)
  }
  return { newToastPopup, toast }
}

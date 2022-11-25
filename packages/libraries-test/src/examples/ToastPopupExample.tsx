import { useCallback, useState } from 'react'

import { Button, IToastPopupProps, Toast } from 'src/components'

export interface IToastPopupListProps extends IToastPopupProps {
  id: number
}

export const ToastPopupExample = () => {
  const [showList, setShowList] = useState<IToastPopupListProps[]>([])

  const showToast = useCallback(
    (item: IToastPopupProps) => {
      setShowList([
        {
          id: Math.floor(Math.random() * 100 + 1),
          ...item,
        },
        ...showList,
      ])
    },
    [showList],
  )

  const deleteToast = useCallback(
    (id: number) => {
      console.log('showList', showList)
      // const index = showList.filter((e) => e.id === id)
      // console.log('index', index)
      // showList.splice(index, 1)
      // console.log('showList 삭제한 후', showList)
      // setShowList([...showList])
    },
    [showList],
  )

  const toastList: IToastPopupProps[] = [
    {
      state: 'info',
      title: 'Information',
      description: '안녕하십니까. 정보입니다.',
      mode: 'dark',
      onCloseClick: deleteToast,
    },
    {
      state: 'error',
      title: 'Error',
      description: '삐빅 에러입니다',
      mode: 'dark',
      onCloseClick: deleteToast,
    },
    {
      state: 'success',
      title: 'Success',
      description: '성공쓰! 축하축하!',
      mode: 'light',
      onCloseClick: deleteToast,
    },
    {
      state: 'warning',
      title: 'Warning',
      description: '위험해!!!!!!!!!',
      mode: 'light',
      onCloseClick: deleteToast,
    },
  ]

  return (
    <div>
      {toastList.map((item) => {
        return (
          <Button key={item.state} onClick={() => showToast(item)}>
            {item.title}
          </Button>
        )
      })}
      <Toast toastList={showList} height="50px" />
    </div>
  )
}

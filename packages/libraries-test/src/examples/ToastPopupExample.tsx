import { IToastPopupProps, Toast } from 'src/components'

export interface IToastPopupListProps extends IToastPopupProps {
  id: number
}

export const ToastPopupExample = () => {
  const toastList: IToastPopupListProps[] = [
    {
      id: 1,
      state: 'info',
      title: 'Information',
      description: '안녕하십니까. 정보입니다.',
      mode: 'dark',
      onCloseClick: () => console.log('1번 팝업 닫습니다.'),
    },
    {
      id: 2,
      state: 'error',
      title: 'Error',
      description: '삐빅 에러입니다',
      mode: 'dark',
      onCloseClick: () => console.log('2번 팝업 닫습니다.'),
    },
    {
      id: 3,
      state: 'success',
      title: 'Success',
      description: '성공쓰! 축하축하!',
      mode: 'light',
      onCloseClick: () => console.log('3번 팝업 닫습니다.'),
    },
    {
      id: 4,
      state: 'warning',
      title: 'Warning',
      description: '위험해!!!!!!!!!',
      mode: 'light',
      onCloseClick: () => console.log('4번 팝업 닫습니다.'),
    },
  ]

  return <Toast toastList={toastList} height="50px" />
}

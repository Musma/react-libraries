import { useCallback } from 'react'

import { Breadcrumb } from './components/Breadcrumb'

const App = () => {
  const handleCrumbClick = useCallback((crumb: string) => {
    console.log(crumb)
  }, [])
  return (
    <div className="h-full w-full">
      <div className="m-10">
        <Breadcrumb crumbs={['home', 's/w team', 'jason']} onClick={handleCrumbClick} />
      </div>
    </div>
  )
}

export default App

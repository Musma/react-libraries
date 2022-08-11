import { Route, Routes } from 'react-router-dom'
import App from 'src/App'
import { pages } from 'src/main'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {Object.entries(pages).map(([key, value]) => (
        <Route key={key} path={key} element={value} />
      ))}
    </Routes>
  )
}
export default AppRoutes

import '@arco-design/web-react/dist/css/arco.css'
import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Edit } from './pages/edit/Edit'
import { Show } from './pages/show/Show'
import { AppContext, ShowItem } from './stores/useAppContext'

function App() {
  const routers = [
    { path: '/', element: <Edit /> },
    { path: '/show', element: <Show /> }
  ]
  const [showItems, setShowItems] = useState<ShowItem[]>([])

  return (
    <div className="h-full">
      <AppContext.Provider value={{ showItems, setShowItems }}>
        <HashRouter basename="/">
          <Routes>
            {routers.map((router) => (
              <Route key={router.path} path={router.path} element={router.element} />
            ))}
          </Routes>
        </HashRouter>
      </AppContext.Provider>
    </div>
  )
}

export default App

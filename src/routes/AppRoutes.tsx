import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Activities, HomeView, NewTaskView } from '@views'

export const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/new-task' element={<NewTaskView />} />
        <Route path='/activities/:day' element={<Activities />} />
        <Route path='*' element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  )
}

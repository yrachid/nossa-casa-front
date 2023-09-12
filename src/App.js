import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home/index'
import { TherapiesPage } from './pages/therapies'
import { EventsPage } from './pages/events'
import { WorkshopsPage } from './pages/workshop'
import { EventsPageDescription } from './pages/events-descrition'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/therapies" element={<TherapiesPage />} />
        <Route path="/artandculture" element={<TherapiesPage />} />
        <Route path="/education" element={<TherapiesPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/projects" element={<TherapiesPage />} />

        <Route path="/events-details" element={<EventsPageDescription />} />
      </Routes>
    </BrowserRouter>
  )
}

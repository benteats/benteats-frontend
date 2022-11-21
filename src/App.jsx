import { AuthProvider } from './context/AuthContext'
import { AppRouter } from './routes'

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

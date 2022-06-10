import { AuthProvider } from './context/AuthContext'
import { AppRouter } from './routes'
import { paletteColors } from './styles/Root'
import ProgressBar from '@badrap/bar-of-progress'

const progress = new ProgressBar({
  size: 2.5,
  color: paletteColors.primary,
  className: 'z-50',
  delay: 100
})

progress.start();

setTimeout(() => {
  progress.finish();
}, 1000);

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

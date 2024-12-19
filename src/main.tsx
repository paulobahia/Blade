import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import { RouterProvider } from 'react-router-dom'
import { Routers } from './routes/index.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from './components/ui/sonner.tsx'
import { FavoritesProvider } from './providers/FavoritesProvider.tsx'
import { ArchivesProvider } from './providers/ArchiveProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ArchivesProvider>
        <FavoritesProvider>
          <RouterProvider router={Routers} />
          <Toaster richColors position='top-right' />
        </FavoritesProvider>
      </ArchivesProvider>
    </ThemeProvider>
  </QueryClientProvider>
)

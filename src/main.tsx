import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {QueryClientProvider, QueryClient} from '@tanstack/react-query'

import { createMockServer } from './mockServer'

const client = new QueryClient()

createMockServer().then(() => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <React.StrictMode>
            <QueryClientProvider client={client}>
                <App />
            </QueryClientProvider>
        </React.StrictMode>
    )
})

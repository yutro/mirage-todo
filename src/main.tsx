import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {AppRoutes} from './App'
import formsPlugin from '@tailwindcss/forms'

import {QueryClientProvider, QueryClient} from '@tanstack/react-query'

import { createMockServer } from './mockServer'

const client = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

import {setup} from 'twind/shim'

const container = document.getElementById('root')

if(!container) throw new Error('app container is missing')

createMockServer().then(() => {
    setup({
        target: container,
    })

    ReactDOM.createRoot(container).render(
        <React.StrictMode>
            <QueryClientProvider client={client}>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </QueryClientProvider>
        </React.StrictMode>
    )
})

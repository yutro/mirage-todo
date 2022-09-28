import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {QueryClientProvider, QueryClient} from '@tanstack/react-query'

import { createMockServer } from './mockServer'

const client = new QueryClient()

import {setup} from 'twind/shim'

const container = document.getElementById('root')

if(!container) throw new Error('app container is missing')

createMockServer().then(() => {
    setup({
        target: container
    })

    ReactDOM.createRoot(container).render(
        <React.StrictMode>
            <QueryClientProvider client={client}>
                <App />
            </QueryClientProvider>
        </React.StrictMode>
    )
})

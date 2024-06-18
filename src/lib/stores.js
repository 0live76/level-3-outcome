import { writable } from 'svelte/store'


export const user = writable("signedOut")
export const isSignedIn = writable(false)
export const orderStatus = writable("Ordering")




export const orderStatus = writable([
    { name: 'thing1', img: '/flour.jpg'}
])

export const orderStatus = writable([
    { name: 'thing1'}
])

export const orderStatus = writable([
    'thing1',
    'thing2'
])



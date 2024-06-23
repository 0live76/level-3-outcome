import { writable } from 'svelte/store'


export const user = writable("signedOut")
export const isSignedIn = writable(false)
export const orderStatus = writable("Ordering")

export const items = writable([
    { name: 'thing1'}
])





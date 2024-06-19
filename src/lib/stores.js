import { writable } from 'svelte/store'


export const user = writable("signedOut")
export const isSignedIn = writable(false)
export const orderStatus = writable("Ordering")

export const list = writable([
    { name: 'thing1'}
])





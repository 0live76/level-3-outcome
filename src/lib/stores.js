import { writable } from 'svelte/store'


export const user = writable("signedOut")
export const isSignedIn = writable(false)
export const orderStatus = writable("Ordering")

export const items = writable([
    
])


export const statuses = writable([
    "Ordering", "Moderating", "Catering", "Ready for Pick-Up"
])



import { writable } from 'svelte/store'


export const user = writable("signedOut")
export const isSignedIn = writable(false)
export const tooMany = writable(false)
export const orderStatus = writable("Ordering")
export const quantity = writable(0)
export const orderComplete = writable(false)
export const maxNumber = writable(5)
export const errorMessage = writable(" ")



export const items = writable([
    
])


export const statuses = writable([
    "Ordering", "Moderating", "Catering", "Ready for Pick-Up"
])



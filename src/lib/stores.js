import { writable } from 'svelte/store'


export const user = writable("signedOut")
export const isSignedIn = writable(false)
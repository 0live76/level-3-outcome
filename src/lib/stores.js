import { writable } from "svelte/store"
import { getlistItems } from "$lib/db.js"
import { getStatus } from "$lib/db.js"

export const user = writable("signedOut")
export const isSignedIn = writable(false)
export const orderComplete = writable(false)
export const errorMessage = writable(" ")
export const list = writable(await getlistItems())
export const isReady = writable(await getStatus())

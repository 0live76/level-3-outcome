import { writable } from "svelte/store"
import { getlistItems } from "$lib/db.js"
import { getStatus } from "$lib/db.js"
import { getGuidelines } from "$lib/db.js"

export const user = writable("signedOut")
export const isSignedIn = writable(false)
export const orderPlaced = writable(false)
// export const tooMany = writable(false)
// export const orderStatus = writable("Ordering")
// export const quantity = writable(0)
export const orderComplete = writable(false)
// export const maxNumber = writable(5)
export const errorMessage = writable(" ")
export const list = writable(await getlistItems())
export const isReady = writable(await getStatus())
export const guidelines = writable(await getGuidelines())

// export const statuses = writable(["Ordering", "Moderating", "Catering", "Ready for Pick-Up"])

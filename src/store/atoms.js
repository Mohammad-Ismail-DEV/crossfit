import { atomWithStorage } from "jotai/utils"

export const userAtom = atomWithStorage(
	"crossfit-user",
	JSON.parse(localStorage.getItem("crossfit-user")) || {}
)

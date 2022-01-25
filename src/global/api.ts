import {API_URL} from "@/global/variables"

export type apiLocation = "home" | "certification"

export async function apiGet(location: apiLocation): Promise<string | null> {
  switch (location) {
    case "home":
      return await apiFetch('/home')
  }

  return null
}

export async function apiFetch(query: string) {

  const response = await fetch(
    API_URL + query,
    {
      method: "GET",
    }
  )

  return await response.json()
}

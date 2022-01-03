export type apiLocation = "home" | "certification"

export function apigGet(location: apiLocation): string | null {
  switch (location) {
    case "certification":
      apiFetch()
      break
  }

  return null
}

export function apiFetch() {
  fetch(
    "",
    {
      method: "GET"
    }
  )
}

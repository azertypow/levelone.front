import {API_URL} from "@/global/variables"

export type apiLocation = "home" | "certification"

export async function apiGet(location: apiLocation): Promise< IApiResponse_certification | null > {
  switch (location) {
    case "home": return await apiFetch('/')
    case "certification": return await apiFetch('/certification/teste') as IApiResponse_certification
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


export interface IApiResponse_certification {
  ref: {
    value: string
  },
  image: IApiImageData,
  specification: {
    value: string
  },
  watch: {
    [key: string]: IApiImageData
  },
  watchCase: {
    [key: string]: IApiImageData
  },
  watchDial: {
    [key: string]: IApiImageData
  },
  movement: {
    [key: string]: IApiImageData
  }
}

export interface IApiImageData {
  url: string,
  safeName: string,
}

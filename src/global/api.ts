import {API_URL} from "@/global/variables"

export type apiLocation = "home" | "certification" | string

export async function apiGet(location: apiLocation, connectionOption?: {password: string, id: string}):
  Promise<
    IApiResonse_home
    | IApiResponse_certification
    | null
    | {error: string}
  > {

  switch (location) {
    case "home": return await apiFetch('/') as IApiResonse_home
    case "certification": return await apiFetch(`/certification/${connectionOption ? `${connectionOption.id}?password=${connectionOption.password}&` : 'noIdPage'}`) as IApiResponse_certification
  }

  return null
}

export async function apiFetch(query: string): Promise<Object| "is locked"> {

  console.log(query)

  const response = await fetch(
    API_URL + query,
    {
      method: "GET",
    }
  )

  return await response.json()
}

export interface IApiResonse_home {
  intro: {
    title: string,
    content: string | null,
    slides: IApiSlide[] | null
  },
  specification: {
    title: string,
    content: string | null,
    slides: IApiSlide[] | null,
  },
  biographie: {
    title: string,
    content: string | null,
    slides: IApiSlide[] | null,
  },
  talents: {
    title: string,
    content: string | null,
    slides: IApiSlide[] | null,
  }
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

export interface IApiSlide {
  image: string[] | null,
  content: string | null
}

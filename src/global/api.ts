import {API_URL} from "@/global/variables"

export type apiLocation = "home" | "certification"

export async function apiGet(location: apiLocation, connectionOption?: {password: string, id: string}):
  Promise<
    IApiResonse_home
    | IApiResponse_certification
    | IApiResponse_locked
  > {

  switch (location) {
    case "home":
      return await apiFetch(              `/${connectionOption ? `${connectionOption.id}?password=${connectionOption.password}&` : 'noIdPage'}`)  as IApiResonse_home | IApiResponse_locked
    case "certification":
      return await apiFetch(`/certification/${connectionOption ? `${connectionOption.id}?password=${connectionOption.password}&` : 'noIdPage'}`)  as IApiResponse_certification | IApiResponse_locked
  }
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

export interface IApiResponse_locked {
  pageLocked: true,
  error: string,
}

export interface IApiResonse_home {
  intro:          IApiResonse_home__section,
  slider:         IApiImageData[],
  specification:  IApiResonse_home__section,
  biographie:     IApiResonse_home__section,
  talents:        IApiResonse_home__section,
}

export interface IApiResonse_home__section {
  title:    string,
  content:  string | null,
  slides:   IApiSlide[] | null
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
  image: {[key: string]: IApiImageData} | null,
  content: string | null
}

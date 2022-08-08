import {API_URL} from "@/global/variables"

export type apiLocation = "home" | "certification" | "certification login" | "preorder"

export async function apiGet(location: apiLocation, connectionOption?: {password: string, id: string}):
  Promise<
    IApiResonse_home
    | IApiResponse_certification
    | IApiResponse_locked
    | IApiResponse_certificationLogin
    | IApiResponse_preorder
  > {

  switch (location) {
    case "home":
      return await apiFetch(              `/${connectionOption ? `${connectionOption.id}?password=${connectionOption.password}&` : 'noIdPage'}`)  as IApiResonse_home | IApiResponse_locked
    case "certification":
      return await apiFetch(`/certification/${connectionOption ? `${connectionOption.id}?password=${connectionOption.password}&` : 'noIdPage'}`)  as IApiResponse_certification | IApiResponse_locked
    case "certification login" :
      return await apiFetch('/certification')  as IApiResponse_certificationLogin
    case "preorder" :
      return await apiFetch('/preorder')  as IApiResponse_preorder
  }
}

export async function apiFetch(query: string): Promise<Object| "is locked"> {

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

export interface IApiResponse_certificationLogin {
  titleName: string
  description: string
  image: IApiImageData | null
  certifications: {
    "title": string
    "url"  : string
  }[]
}

export interface IApiResponse_preorder {
  titleName: string
  description: string
  image: IApiImageData | null
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
  }
  watchDescription: string

  watchCase: {
    [key: string]: IApiImageData
  }
  watchCaseDescription: string

  watchDial: {
    [key: string]: IApiImageData
  }
  watchDialDescription: string

  watchNeedle: {
    [key: string]: IApiImageData
  }
  watchNeedleDescription: string

  movement: {
    [key: string]: IApiImageData
  }
  movementDescription: string
}

export interface IApiImageData {
  url: string,
  safeName: string,
}

export interface IApiSlide {
  image: {[key: string]: IApiImageData} | null,
  content: string | null
}

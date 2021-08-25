import { Dispatch } from "react"

export type Lang = "ru" | "en"

export interface IProps {
  dispatch?: Dispatch<any>
  location?: any
}

export interface IRoutes {
  auth: boolean
}

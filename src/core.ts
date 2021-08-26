import { Dispatch, ChangeEvent } from "react"

const timeMessages = {
  m: "morningMessage",
  d: "dayMessage",
  e: "eveningMessage",
  n: "nightMessage",
}

export type Lang = "ru" | "en"

export interface IProps {
  dispatch?: Dispatch<any>
  location?: any
}

export interface IAuthProps extends IProps {
  auth: boolean
}

export interface IInput {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export const getCurrentHour = () =>
  Number.parseInt(new Date().toTimeString().slice(0, 2))

export const setTimeMessage = (time: number) =>
  time >= 4 && time < 12
    ? timeMessages["m"]
    : time >= 12 && time < 17
    ? timeMessages["d"]
    : time >= 17 && time < 0
    ? timeMessages["e"]
    : timeMessages["n"]

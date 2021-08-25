import { IAction } from "./app"

export interface IUserState {
  login: string | null
  auth: boolean
}

const initialState: IUserState = {
  login: null,
  auth: false,
}

const userReducer = (state: IUserState = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export default userReducer

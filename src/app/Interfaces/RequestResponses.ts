import {User} from "../Model/user";

export interface RequestResponsesGetUsers {
  success: boolean
  message: string,
  data: User[]
}

export interface RequestResponseDeleteUser {
  success: boolean
  message: string,
  data: null
}
export interface RequestResponseGetToken {
  token : string
}
export interface RequestResponseCreateUser {
  success: boolean
  message: string,
  data : null
}

export interface IUser {
    _id?: string,
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    photo: string,
    password:string
}
export interface IUserRequest{
    firstName?: string,
    lastName?: string,
    email?: string,
    password?:string
    photo?: string,
}
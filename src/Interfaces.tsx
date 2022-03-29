export interface IUser {
    name: { first: string, last: string, title: string },
    email: string,
    login: { md5: string }
}
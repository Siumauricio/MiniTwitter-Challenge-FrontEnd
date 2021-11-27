export interface User {
    username: string;
    password: string;
    email: string;
}
export interface JWT{
    token: string;
    idUser: number;
}
export interface Profile{
    idUser: number;
    username: string;
    email: string;
    followers: number;
    following: number;
    joinDate:Date;
    description: string;

}

export interface Tweet{
    username: string;
    idUser: number;
    twitt: string;
    creationDate: Date;

}
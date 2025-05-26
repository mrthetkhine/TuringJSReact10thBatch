export interface Director
{
    _id?:string;
    name:string;
    phoneNo:string;
}
export interface Review {
    _id?:string;
    title:string;
    director:Director;
    year:number;
}
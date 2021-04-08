export interface Rental{
    id? : number;
    carId : number;
    customerId : number;
    rentDate : Date;
    returnDate  :Date;
    brandName : string;
    colorName : string;
    DailyPrice : number;
    Description : string;
}
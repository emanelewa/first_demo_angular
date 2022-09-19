interface IProduct{
  id:number,
  name:string,
  quantity:number,
  price:number,
  img:string
}
interface ICategory{
  id:number,
  name:string,
}
enum DiscountOffers {
  suit = "No Discount",
  dress = "10%",
  tshirt = "15%"
}

type Customer = {
  email: string;
  name: string;
}

type CustomerList = {
  name: ID;
  value: Customer;
}

type TrackingItem = {
  customer_id: ID;
  customer: Customer;
  items: Item[];
}

type Item = {
  item_id: IDBCursor;
  name: string;
  price: number;
  quantity: number;
}

type OrderResponse = {
  value: Orders;
}

type CustomerResponse = {
  name: ID;
  value: Customer;
}

type Order = {
  carrier: string;
  createdAt: string;
  shippingCost: number;
  trackingId: string;
  trackingItems: TrackingItems;
  Lat: number;
  Lng: number;
  Address: string;
  City: string;
}
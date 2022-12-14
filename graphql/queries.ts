import { gql } from '@apollo/client';

export const GET_CUSTOMERS = gql`
  query MyQuery   {
    getCustomers {
      name
      value {
        email
        name
      }
    }
  }
`;

export const GET_ORDERS = gql`
  query MyQuery   {
    getOrders {
      name
      value {
        City
        Lat
        Lng
        carrier
        createdAt
        Address
        shippingCost
        trackingId
        trackingItems {
          customer_id
          customer {
            email
            name
          }
          items {
            item_id
            name
            price
            quantity
          }
        }
      }
    }
  }
`;
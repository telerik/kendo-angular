import gql from 'graphql-tag';

export const getProductsQuery = gql `{
  products {
      ProductID
      ProductName
      UnitPrice
      UnitsInStock
  }
}
`;

export const addProductMutation = gql`
  mutation AddProduct($ProductName: String!, $UnitPrice: Float!, $UnitsInStock: Float!){
      AddProduct(ProductName: $ProductName, UnitPrice: $UnitPrice, UnitsInStock: $UnitsInStock){
          ProductName
          ProductID
      }
  }
`;

export const updateProductMutation = gql`
  mutation UpdateProduct($ProductID: ID!, $ProductName: String! ,$UnitPrice: Float!, $UnitsInStock: Float!){
      UpdateProduct(ProductID: $ProductID, ProductName: $ProductName, UnitPrice: $UnitPrice, UnitsInStock: $UnitsInStock){
          ProductID
      }
  }
`;

export const deleteProductMutation = gql`
  mutation DeleteProduct($ProductID: ID!){
      DeleteProduct(ProductID: $ProductID){
          ProductID
      }
  }
`;


export const getProductByHandle = /* GraphQL */ `
    query getProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      images(first: 10) {
        edges {
          node {
            altText
            originalSrc
            width
            height
          }
        }
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            selectedOptions {
              name
              value
            }
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;
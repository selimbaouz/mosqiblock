export const checkoutCreate = `
    mutation checkoutCreate($variantId: ID!, $totalQuantity: Int!) {
        checkoutCreate(input: {
            lineItems: {
                variantId: $variantId,
                quantity: $totalQuantity
            }
        }) 
            {
                checkout {
                    webUrl
                }  
            }  
    }
    
`

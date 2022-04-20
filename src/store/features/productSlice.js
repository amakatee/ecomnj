import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems:[],
    products: [
        {
        id:1,
        imageURL:[
            "https://i.pinimg.com/564x/54/28/b1/5428b18b5aab94dd7eb9abad1561b231.jpg",
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_018_1080x.jpg?v=1646350867',
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867',
            "https://i.pinimg.com/564x/23/8c/e1/238ce1a2611002e93b9f499dd029047b.jpg"
          ],
        name: "The Amara Dress",
        category: "dress",
        price: 8050,
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo" ,
        colors: ["lightblue", "black", "white", "beige"],
        sizes:["XS", "S", "M", "L"]
       },
       { id: 2,
         imageURL:[
             "https://i.pinimg.com/564x/23/8c/e1/238ce1a2611002e93b9f499dd029047b.jpg",
             'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867',
              'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867'
            ],
         name: "Party Look ",
         category: "dress",
         price: 9550,
         description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo"    ,
         colors: ["beige", "black", "white"],
         sizes:["XS", "S", "M", "L"]
       },
       { id: 3,
        imageURL: [
            "https://i.pinimg.com/564x/34/4a/7e/344a7e98162f10539d2d6b286269ee0d.jpg",
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867',
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867'
    ],
        name: "Spring Fling",
        category: "dress",
        price: 9800,
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo"   , 
        colors: ["red", "black", "white", "pink"],
        sizes:["XS", "S", "M", "L"]
      },
      { id:4,
        imageURL: [
            "https://i.pinimg.com/564x/17/5b/a4/175ba4bafa8d9c2779e4c1ac0ceed6bd.jpg",
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867',
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867'
    ],
        name: "Crystal Hills",
        category: "shoes",
        price: 9800,
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo"  ,  
        colors: ["red", "black", "white"],
        sizes:["XS", "S", "M", "L"]
      },
      { id:5,
        imageURL: [
            "https://i.pinimg.com/564x/52/4f/7a/524f7a2b93a9630547632ab8e656e9de.jpg",
            "https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867",
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867'
    ],
        name: "Alice Earrings",
        category: "jewels",
        price: 7800,
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo"   , 
        colors: ["red", "black", "white"],
        sizes:["XS", "S", "M", "L"]
      },
      { id:6,
        imageURL: [
            "https://i.pinimg.com/564x/3f/0c/f0/3f0cf0555765c6ca247ef42156cbac60.jpg",
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867',
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867'
    ],
        name: "Bellah Sandals",
        category: "shoes",
        price: 8950,
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo"   , 
        colors: ["red", "black", "white"],
        sizes:["XS", "S", "M", "L"]
      },
      { id:7,
        imageURL: [
            "https://i.pinimg.com/564x/c9/92/35/c99235cf778fc121c4d26652530cc125.jpg",
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867',
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867'
    ],
        name: "Red Viola Skirt",
        category: "dress",
        price: 9800,
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo"   , 
        colors: ["red", "black", "white"],
        sizes:["XS", "S", "M", "L"]
      },
      { id:8,
        imageURL: [ 
            "https://i.pinimg.com/564x/48/f7/27/48f727ef69c61987cf30576e55e95ad8.jpg",
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867',
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867'
    ],
        name: "Julia Earrings",
        category: "jewels",
        price: 6800,
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo"  ,  
        colors: ["red", "black", "white"],
        sizes:["XS", "S", "M", "L"]
      },
      { id:9,
        imageURL: [
            "https://i.pinimg.com/564x/18/62/f5/1862f58707734e7123278a633c3890e2.jpg",
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867',
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867'
    ],
        name: "NJ Girl Dress",
        category: "dress",
        price: 10800,
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo"  ,  
        colors: ["red", "black", "white"],
        sizes:["XS", "S", "M", "L"]
      },
      { id:10,
        imageURL: [
            "https://i.pinimg.com/564x/51/a5/c0/51a5c0eb6e4e17074d4021f5ef90d4c8.jpg",
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867',
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867'
    ],
        name: "Sparkly Neclkace",
        category: "jewels",
        price: 12800,
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo"   , 
        colors: ["red", "black", "white"],
        sizes:["XS", "S", "M", "L"]
      },
      { id:11,
        imageURL:[ 
            "https://i.pinimg.com/564x/4d/36/03/4d360340432ffc20612434152bfa4506.jpg",
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867',
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867'
    ],
        name: "Abdrianna Dress",
        category: "dress",
        price: 9800,
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo"    ,
        colors: ["red", "black", "white"],
        sizes:["XS", "S", "M", "L"]
      },
      { id:12,
        imageURL: [
            "https://i.pinimg.com/564x/e3/5e/a3/e35ea36123163bd478d691d7c949f740.jpg",
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867',
            'https://cdn.shopify.com/s/files/1/1994/9649/products/20220104_C_NJss2022_Look54_004_1080x.jpg?v=1646350867'
    ],
        name: "Black Mini Dress",
        category: "dress",
        price: 9700,
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo" ,   
        colors: ["red", "black", "white"],
        sizes:["XS", "S", "M", "L"]
      },
    ],
    totalQuantity: 0,
    showCart: false,
    showMenu: false
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addToCart: (state, action) => {
          const newItem = action.payload
          console.log(newItem)
          const existingItem = state.cartItems.find(product => product.id === newItem.id)
          if(existingItem) {
            existingItem.quantity++
            existingItem.totaPrice += existingItem.price
          }else {
            state.cartItems.push({
              id:newItem.id,
              name: newItem.name,
              price: newItem.price,
              size: newItem.size,
              color: newItem.color,
              quantity:1,
              imageURL: newItem.imageURL, 
              totalPrice: newItem.price
            })
            state.totalQuantity++
          }
  

        },
        removeFromCart: (state, action) => {
          const id = action.payload
          const existingItem = state.cartItems.find(item => item.id === id)
          if(existingItem.quantity === 1) {
            state.cartItems = state.cartItems.filter(item => item.id !== id)
            state.totalQuantity--
           
          } else {
            existingItem.quantity--
            existingItem.totaPrice -= existingItem.price
          }
          

        },
        setShowCart:(state) => {
            state.showCart = !state.showCart

        },
        toggleMenu: (state) => {
            state.showMenu = !state.showMenu
        },
        filterProducts:(state, action) => {
            state.category = action.payload
         
        }
    }
})
export const allProducts = (state) => state.products.products
export const cartItems = (state) => state.products.cartItems
export const quantity = (state) => state.products.totalQuantity
export const showCart = (state) => state.products.showCart 
export const showMenu = (state) => state.products.showMenu
export const totalQuant = (state) => state.products.totalQuantity
export const productImages = (state) => {
  const products = state.products.products
  return products.map(product => product.imageURL).map(i => i[0])

}

export const allProductsFiltered = (state) => {
  const products = state.products.products
  const category = state.products.category
  if (category == null) {
    return products
  } else {
    return products.filter(product => product.category === category)
  }
}

export const selectProductById = (state, productId) => {
  state.products.products.find(product => product.id === productId)
}


export const { setShowCart, toggleMenu, filterProducts, addToCart, removeFromCart } = productSlice.actions
export default productSlice.reducer
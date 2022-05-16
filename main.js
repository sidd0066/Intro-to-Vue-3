const app = Vue.createApp({
    data: function(){
        return {
            cart: 0,
            product: 'Socks',
            image: '/images/socks_blue.jpg',
            inventory: 8,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: '/images/socks_green.jpg'},
                { id: 2235, color: 'blue', image: '/images/socks_blue.jpg'},
            ]
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){

            this.image = variantImage
        }
    }
})

// Continue on lesson #7 Class & Style Bending

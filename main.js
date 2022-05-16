const app = Vue.createApp({
    data: function(){
        return {
            product: 'Socks',
            image: '/images/socks_blue.jpg',
            inventory: 8,
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    }
})

// Figure out image issue

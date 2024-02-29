// everything goes through the app div in index.html
const app = Vue.createApp({
    // interpolates the variable
    // a function that returns an object
    
    // i believe this is an object called data
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            console.log(results)
            
            // getting them as objects out of the results array
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

// pass the template through the app div
app.mount('#app')
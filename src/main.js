/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


//Paul Barreto 
// Plugins
import { registerPlugins } from '@/plugins'
import Toast from 'vue-toastification'; // Import Toast from vue-toastification
import 'vue-toastification/dist/index.css'; // Import el CSS de vue-toastification
import '@/assets/global.css'; // Global css app



// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

//Vtoast options
const options = {
    // You can set the position of the toast notifications
    position: 'top-right',
    // Time in milliseconds before the toast notification automatically closes
    timeout: 3000,
    // Displays the progress bar under the toast notification
    showProgressBar: true,
    // Closes the toast notification when clicked on it
    closeOnClick: true,
    // Allows or not the closing of the toast notification when clicking outside of it
    pauseOnHover: true,
    // Allows or not the closing of the toast notification when focus is lost
    pauseOnFocusLoss: true,
    // Allows or not the closing of the toast notification when scrolling
    pauseOnScroll: true,
    // Allows or not the closing of the toast notification when touched (on touch devices)
    closeOnSwipe: true,
    // Allows or not the closing of the toast notification when dragged
    draggable: true,
    // Changes the direction of the drag of the toast notification
    draggablePercent: 0.6,
    // Allows or not the duplication of the toast notification
    preventDuplicates: false,
    // Transitions of the toast notification
    transition: 'Vue-Toastification__bounce',
    // Maximum number of active toast notifications on the screen
    maxToasts: 2,
    // Custom class for the toast notification
    newestOnTop: true
  };
  

registerPlugins(app)
app.use(Toast, options); //enabled options

app.mount('#app')

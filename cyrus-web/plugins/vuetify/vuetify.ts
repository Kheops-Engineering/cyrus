import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#88b7b5',
        secondary: '#fffd82',
        accent: '#dcb9af',
        error: '#e84855',
        info: '#344966',
        success: '#affc41',
        warning: '#ff9b71',
      },
    },
  },
})

import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#FFFFFF',
                secondary: '#424242',
            },
            dark: {
                primary: '#000000',
                secondary: '#FFFFFF',
            },
        }
    }
});
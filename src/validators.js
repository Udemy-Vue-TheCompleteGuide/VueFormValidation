import Vue from 'vue'
import {ValidationProvider, extend, configure} from 'vee-validate';
import {required,email} from "vee-validate/dist/rules";


// config
configure({
    classes: {
        invalid: 'is-invalid'
    }
})

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);

// Add a rule.
extend('required', required);
extend('email', email);

extend('secret', {
    validate: value => value === 'example',
    message: 'This is not the magic word'
});

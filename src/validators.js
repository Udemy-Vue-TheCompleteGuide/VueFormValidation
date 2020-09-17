import Vue from 'vue'
import {ValidationProvider, extend, configure} from 'vee-validate';
import {required,email,regex} from "vee-validate/dist/rules";


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

// registering existing rule with custom message
extend('regex', {
    ...regex,
    message: '{_field_} most have the form 34243 or 34243-4419'
});

extend('secret', {
    validate: value => value === 'example',
    message: 'This is not the magic word'
});

// using parameter and placeholder on message
extend('minLength', {
    validate: (value, args) => {
        return value.length >= args.length;
    },
    message: 'The {_field_} must have at least {length} characters',
    params: ['length']
});

// using multiples parameters, destructuring args and message as function
extend('minMaxLength', {
    validate: (value, {min, max}) => {
        return value.length >= min && value.length <= max;
    },
    message: (fieldName, {min, max} /*placeholders*/) => {
        // you can use placeholders object
        //return `${fieldName} must have at least ${placeholders.min} characters and ${placeholders.max} characters at most`;

        // or destructure the placeholder
        // more about message on https://logaretm.github.io/vee-validate/guide/basics.html#messages
        return `${fieldName} must have at least ${min} characters and ${max} characters at most`;
    },
    params: ['min', 'max']
});

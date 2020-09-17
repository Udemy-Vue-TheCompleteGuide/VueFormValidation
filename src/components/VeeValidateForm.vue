<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h1>Vee-Validate - Validate form inputs</h1>
        <p>
          Validate form inputs using VeeValidate.
          <a href="https://logaretm.github.io/vee-validate/guide/basics.html" target="_blank" rel="noopener">VeeValidate
            documentation</a>.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <ValidationObserver v-slot="{handleSubmit, invalid}">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <div class="form-group">
              <label for="inputEmail4">Email</label>
              <ValidationProvider name="Email" rules="required|email" v-slot="v">
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email"
                       :class="v.classes"
                       v-model="email">
                <div class="invalid-feedback">{{ v.errors[0] }}</div>
              </ValidationProvider>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <ValidationProvider rules="secret" v-slot="v">
                  <input type="password" class="form-control" id="inputPassword4" placeholder="Password"
                         :class="v.classes"
                         v-model="password"
                  >
                  <div class="invalid-feedback">{{ v.errors[0] }}</div>
                </ValidationProvider>
              </div>
              <div class="form-group col-md-6">
                <label for="inputConfirmPassword4">Password</label>
                <ValidationProvider rules="secret" v-slot="v">
                  <input type="password" class="form-control" id="inputConfirmPassword4" placeholder="Confirm Password"
                         :class="v.classes"
                         v-model="passwordConfirm"
                  >
                  <div class="invalid-feedback">{{ v.errors[0] }}</div>
                </ValidationProvider>
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Address</label>
              <ValidationProvider name="Address" rules="required" v-slot="v">
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"
                       :class="v.classes"
                       v-model="address"
                >
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label for="inputAddress2">Address 2</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
            </div>
            <div class="form-group">
              <label for="inputCity">City</label>
              <ValidationProvider name="City" rules="required|minLength:3" v-slot="v">
                <input type="text" class="form-control" id="inputCity"
                       :class="v.classes"
                       v-model="city"
                >
                <p class="invalid-feedback">{{ v.errors[0] }}</p>
              </ValidationProvider>
            </div>
            <div class="form-row">
              <div class="form-group col-md-8">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="inputZip">Zip</label>
                <ValidationProvider name="Zip" rules="required|minMaxLength:5,10" v-slot="v">
                  <input type="text" class="form-control" id="inputZip" placeholder="34243-4419"
                         pattern="^\d{5}(?:[-\s]\d{4})?$"
                         :class="v.classes"
                         v-model="zip"
                  >
                  <p class="invalid-feedback">{{ v.errors[0] }}</p>
                </ValidationProvider>
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="invalid">
              Sign in
            </button>
          </form>
        </ValidationObserver>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VeeValidateForm',
  data() {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    }
  },
  methods: {
    onSubmit() {
      console.log('Form submitted!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

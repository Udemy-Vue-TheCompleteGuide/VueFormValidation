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
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <ValidationProvider name="Email" rules="required|email" v-slot="v">
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email"
                       :class="v.classes"
                       v-model="email">
                <div class="invalid-feedback">{{ v.errors[0] }}</div>
              </ValidationProvider>
            </div>
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
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip">
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
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
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
      password: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

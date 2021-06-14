<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-toolbar flat>
            <v-toolbar-title>Вход</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                label="Е-мейл"
                name="login"
                prepend-icon="mdi-email"
                type="email"
                required
                v-model="email"
                :rules="emailRules"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Пароль"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                required
                v-model="password"
                :rules="passwordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click.prevent="send()" :disabled="!valid">Войти</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      valid: null,
      emailRules: [
        (v) => !!v || "Пожалуйста введите е-мейл",
        (v) => /.+@.+\..+/.test(v) || "Неправильный е-мейл",
      ],
      passwordRules: [
        (v) => !!v || "Пожалуйста введите пароль",
        (v) =>
          (v && v.length >= 6) ||
          "Пароль слишком короткий - минимум 6 символов",
      ],
    };
  },
  methods: {
    send() {
      this.$store.dispatch("SIGNIN", {
        email: this.email,
        password: this.password,
      });
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  watch: {
    isAuthenticated(val) {
      if (val === true) {
        this.$router.push("/admin");
      }
    },
  },
};
</script>
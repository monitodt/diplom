<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card width="700px">
          <v-data-table
            :headers="headers"
            :items="users ? users : []"
            class="elevation-1"
            :loading="!users"
            :loading-text="loadingText"
          >
            <template v-slot:item.id="{ item }">
              <v-icon style="cursor: pointer" @click="deleteUserRequest(item)">
                mdi-delete-off</v-icon
              >
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col>
        <v-card width="700px">
          <v-data-table
            :headers="headers1"
            :items="companies ? companies : []"
            class="elevation-1"
            :loading="!companies"
            :loading-text="loadingText"
          >
            <template v-slot:item.id="{ item }">
              <v-icon
                style="cursor: pointer"
                @click="deleteCompanyRequest(item)"
              >
                mdi-delete-off</v-icon
              >
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-btn @click="exit()">Выйти</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "ФИО",
          align: "start",
          sortable: true,
          value: "fullname",
        },
        {
          text: "Номер телефона",
          sortable: true,
          value: "number",
        },
        {
          text: "Адрес",
          sortable: true,
          value: "address",
        },
        {
          text: "",
          sortable: false,
          value: "id",
        },
      ],
      headers1: [
        {
          text: "Название компании",
          align: "start",
          sortable: true,
          value: "company",
        },
        {
          text: "Номер телефона",
          sortable: true,
          value: "number",
        },
        {
          text: "Адрес",
          sortable: true,
          value: "address",
        },
        {
          text: "",
          sortable: false,
          value: "id",
        },
      ],
      loading: true,
      loadingText: "Загрузка данных",
    };
  },
  methods: {
    deleteUserRequest(user) {
      this.$store.dispatch("DELETE_USER_REQUEST", {
        user: user,
        id: user.id,
      });
    },
    deleteCompanyRequest(company) {
      this.$store.dispatch("DELETE_COMPANY_REQUEST", {
        company: company,
        id: company.id,
      });
    },
    exit() {
      this.$store.dispatch("SIGNOUT");
      this.$router.push("/");
    },
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
    companies() {
      return this.$store.getters.companies;
    },
  },
};
</script>
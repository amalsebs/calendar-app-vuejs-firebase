<template>
  <v-app>
    <v-content>
      <calendar/>
    </v-content>
  </v-app>
</template>

<script>
import calendar from './components/Calendar';

export default {
  name: 'App',

  components: {
    calendar,
  },

  data: () => ({
    //
  }),
};
</script>

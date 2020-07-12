<template>
  <v-app>
    <v-main>
      <v-container>
        <nuxt />
        <slot />
      </v-container>
    </v-main>
    <v-footer :absolute="true" app>
      <span>Kheops technologies &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

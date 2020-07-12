<template>
  <div>
    <div class="test">
      asdasdsadasdas
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  layout: 'projectsLayout',
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/main';

.test {
  @include size(350px);
}
</style>

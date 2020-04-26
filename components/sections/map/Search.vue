<template>
  <div class="search-wrapper">
    <div class="icon-wrapper">
      <img src="@/assets/icons/search.svg" alt class="icon" />
    </div>
    <input
      type="text"
      placeholder="Find your marketplace"
      v-model="searchQuery"
      v-on:keyup="setSearchQuery"
    />
  </div>
</template>

<script>
export default {
  name: "Search",
  data: () => ({
    searchQuery: "Stresemannstraße 123, 10963 Berlin"
  }),

  methods: {
    setSearchQuery(v) {
      const val = v.target.value;
      this.searchQuery = val;
    }
  }
};
</script>

<style lang="scss" scope>
.search-wrapper {
  position: absolute;
  left: 50px;
  top: 10px;
  height: 50px;
  z-index: 1000;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  display: flex;
  border-radius: var(--radius);
  overflow: hidden;

  .icon-wrapper {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    padding-left: 62px;
    padding-right: 12px;
    font-size: 14px;
    min-width: 300px;
    outline: none;
    border: none;
  }
}
</style>
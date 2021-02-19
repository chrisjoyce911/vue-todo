<template>
  <div>
    Filter Todos:
    <select @change="changeLimit($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  data() {
    return {
      limit: null,
      filterNumber: [
        { name: "200", code: "200" },
        { name: "100", code: "100" },
        { name: "50", code: "50" },
        { name: "10", code: "10" },
        { name: "5", code: "5" },
      ],
    };
  },
  methods: {
    ...mapActions(["filterTodos"]),
    changeLimit(e) {
      console.log(e);
      this.filterTodos(e.target.value);
    },
  },
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>

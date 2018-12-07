<template>
  <div>
    <ul id="example-2">
      <li v-for="(item, index) in items">{{ parentMessage }} - {{ index }} - {{ item.message }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentMessage: "Parent",
      items: [{ message: "Foo" }, { message: "Bar" }]
    };
  }
};
</script>

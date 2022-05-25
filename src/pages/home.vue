<template>
  <section>
    <table>
      <thead>
        <tr>
          <th @click="sort('name')">Name</th>
          <th @click="sort('age')">Age</th>
          <th @click="sort('gender')">Gender</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in usersSort" :key="user.id">
          <td>
            <img class="user-image" :src="user.img" :alt="user.name" />
            <span>{{ user.name }}</span>
          </td>
          <td>{{ user.age }}</td>
          <td>{{ user.gender }}</td>
        </tr>
      </tbody>
    </table>
    <p>debug: sort: {{ currentSort }}, dir: {{ currentSortDir }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      currentSort: 'name',
      currentSortDir: 'asc'
    }
  },
  created() {
    fetch('https://tocode.ru/static/_secret/courses/1/usersCrmApi.php')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.users = data
      })
      .catch(error => {
        console.log(error)
      })
  },
  computed: {
    usersSort() {
      return this.users.sort((a, b) => {
        let mod = 1
        if (this.currentSortDir === 'desc') mod = -1
        if (a[this.currentSort] < b[this.currentSort]) return -1 * mod
        if (a[this.currentSort] > b[this.currentSort]) return 1 * mod
        return 0
      })
    }
  },
  methods: {
    sort(e) {
      if (e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      } else {
        this.currentSort = e
        this.currentSortDir = 'asc'
      }
    }
  }
}
</script>

<style lang="scss">
.user-image {
  margin-right: 20px;
  width: 60px;
  border-radius: 100%;
}
</style>

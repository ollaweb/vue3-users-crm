<template>
  <section>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            <img class="user-image" :src="user.img" :alt="user.name" />
            <span>{{ user.name }}</span>
          </td>
          <td>{{ user.age }}</td>
          <td>{{ user.gender }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: []
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

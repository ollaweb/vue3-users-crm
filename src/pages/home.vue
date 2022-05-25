<template>
  <section>
    <table>
      <thead>
        <tr>
          <th @click="sort('name')">Name &#8595;</th>
          <th @click="sort('age')">Age &#8595;</th>
          <th @click="sort('gender')">Gender &#8595;</th>
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
    <p class="debug">
      debug: sort: {{ currentSort }}, dir: {{ currentSortDir }}, page:
      {{ page.current }} of {{ numberOfPages }}
    </p>
  </section>
  <section>
    <div class="button-list">
      <button
        class="btn btnPrimary"
        :disabled="disablePrevButton"
        @click="prevPage"
      >
        &#8592;
      </button>
      <button
        class="btn btnPrimary"
        :disabled="disableNextButton"
        @click="nextPage"
      >
        &#8594;
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      currentSort: 'name',
      currentSortDir: 'asc',
      page: {
        current: 1,
        length: 3
      }
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
      return this.users
        .sort((a, b) => {
          let mod = 1
          if (this.currentSortDir === 'desc') mod = -1
          if (a[this.currentSort] < b[this.currentSort]) return -1 * mod
          if (a[this.currentSort] > b[this.currentSort]) return 1 * mod
          return 0
        })
        .filter((row, index) => {
          let start = (this.page.current - 1) * this.page.length
          let end = this.page.current * this.page.length
          if (index >= start && index < end) return true
        })
    },
    numberOfPages() {
      return Math.ceil(this.users.length / this.page.length)
    },
    disableNextButton() {
      if (this.page.current === this.numberOfPages) return true
    },
    disablePrevButton() {
      if (this.page.current === 1) return true
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
    },
    prevPage() {
      if (this.page.current > 1) this.page.current -= 1
    },
    nextPage() {
      if (this.page.current * this.page.length < this.users.length)
        this.page.current += 1
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
.debug {
  text-align: center;
}
.button-list {
  width: 100%;
  text-align: center;
  & .btn {
    margin: 0 50px;
  }
}
</style>

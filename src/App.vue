<template>
  <div id="app">
    <div class="main-layout">
      <Sidebar />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.main-layout {
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
}

.content {
  flex: 1;
  padding: 20px;
  margin-left: 250px;
  width: calc(100% - 250px);
  height: 100%;
  overflow-y: auto;
}
</style>

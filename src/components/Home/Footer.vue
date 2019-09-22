<template>
  <footer class="main-footer">
            <nav>Copyright &copy; uHost, {{ date.getFullYear() }}.</nav>
    </footer>
</template>



<script>
export default {
    name: 'Footer',

    data() {
        return {
            date: new Date()
        }
    }
}
</script>



<style lang="scss" scoped>
    .main-footer {

        nav {
            background-color: #131212;
            padding: 3rem;
            color: #fff;
            margin-top: 1.5rem;
            margin-bottom: 0;

        }
    }
</style>
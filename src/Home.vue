<template>
    <div class="home-container">
        <CallToAction />
        <Plans />
        <KeyFeatures />
        <Footer />
    </div>
</template>



<script>
import CallToAction from './components/Home/CallToAction.vue';
import Plans from './components/Home/Plans.vue';
import KeyFeatures from './components/Home/KeyFeatures.vue';
import Footer from './components/Home/Footer.vue';

export default {
    name: 'Home',

    components: {
        CallToAction,
        Plans,
        KeyFeatures,
        Footer
    }
}
</script>



<style>

</style>
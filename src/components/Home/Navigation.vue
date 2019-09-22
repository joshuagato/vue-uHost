<template>
    <div>
        <div class="main-header">
            
            <div class="nav-brand">
                <router-link to="/" class="link" exact>uHost</router-link>
            </div>

            <div class="main-nav">
            <ul>
                <li><router-link to="/packages" class="link">Packages</router-link></li>
                <li><router-link to="/customers" class="link">Customers</router-link></li>
                <li><router-link to="/support" class="link">Support</router-link></li>
                <li><router-link to="/terms" class="link">Terms of Use</router-link></li>
                <li><router-link to="/start-hosting" class="link">Start Hosting</router-link></li>          
            </ul>
            </div>

            <button @click="showMenu" class="toggle-button">
                <span></span>
                <span></span>
                <span></span>
            </button>

        </div>
        <div class="mobile-nav">
            <nav>
                <ul>
                    <li><router-link to="/packages" class="link">Packages</router-link></li>
                <li><router-link to="/customers" class="link">Customers</router-link></li>
                <li><router-link to="/support" class="link">Support</router-link></li>
                <li><router-link to="/terms" class="link">Terms of Use</router-link></li>
                <li><router-link to="/start-hosting" class="link">Start Hosting</router-link></li>
                </ul>
            </nav>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Navigation',
    data() {
        return {
            
        }
    },
    methods: {
        showMenu: function() {

            var toggleButton = document.querySelector('.toggle-button');
            var mobileNav = document.querySelector('.mobile-nav');

            if(mobileNav.classList.contains('open')) {

                mobileNav.classList.remove('open');
            }
            else {
                mobileNav.classList.add('open');
            }
        }
    }
}
</script>


<style lang="scss" scoped>
    .main-header {
        position: fixed;
        width: 100%;
        top: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #62abb8;
        z-index: 1;
        padding: 1.3rem;
        

        @media(max-width: 575px) {
            padding: 1.3rem;
        }

        .nav-brand {
            margin-left: 1.9rem;

            @media(max-width: 575px) {
                margin-left: 2rem;
            }

            .link {
                text-decoration: none;
                color: #000;

                &:hover {
                    font-weight: bolder;
                }
            }
        }

        .main-nav {

            ul {
                list-style: none;
                margin: 0;
                padding: 0;

                li {
                    display: inline-block;
                    margin: 0 1rem;

                    .link {
                        text-decoration: none;
                        color: #000;

                        &:hover {
                            font-weight: bolder;
                        }
                    }
                }
            }
            
            @media(max-width: 575px) {
                display: none;
            }
        }

        .toggle-button {
            width: 2.5rem;
            background: transparent;
            border: 1px solid black;
            cursor: pointer;

            @media(min-width: 768px) {
                display: none;
            }

            &:hover {
                background: #c9e5e9;
                border: 1px solid gray;

                span {
                    background: gray;
                }
            }

            &:focus,
            &:active {
                outline: none;
            }

            span {
                width: 100%;
                height: 0.1rem;
                background: black;
                display: block;
                margin: 0.4rem 0;
            }
        }
    }

    .mobile-nav {
        display: none;

        @media(max-width: 575px) {
            background-color: #000;
            // display: block;
            width: 100%;
            z-index: 1;
            margin-top: 0.5rem;
            position: fixed;

            nav {

                ul {
                    padding: 0;
                    margin: 0;
                    list-style: none;

                    li {
                        margin: 1rem;

                        .link {
                            text-decoration: none;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }

    .open {
        display: block !important;
        opacity: 1 !important;
        // transform: translateY(0) !important;
    }

</style>
<template>
    <section>
        <h1>CHOOSE YOUR PLAN</h1>

        <div id="plan-list">
            <article class="plan light">
                <h1>FREE</h1>
                <h2>GHC 0 / Month</h2>
                <h3>For hobby projects or small teams.</h3>
                <ul>
                    <li>1 Workspace</li>
                    <li>Unlimited Traffic</li>
                    <li>10GB Storage</li>
                    <li>Basic Support</li>
                </ul>
                <div>
                    <button>{{ buttonLabel }}</button>
                </div>
            </article>

            <article class="plan deep">
                <h1 id="recommended">RECOMMENDED</h1>
                <h1>PLUS</h1>
                <h2>GHC 29 / Month</h2>
                <h3>For ambitious projects.</h3>
                <ul>
                    <li>5 Workspaces</li>
                    <li>Unlimited Traffic</li>
                    <li>100GB Storage</li>
                    <li>Plus Support</li>
                </ul>
                <div>
                    <button>{{ buttonLabel }}</button>
                </div>
            </article>

            <article class="plan light">
                <h1>PREMIUM</h1>
                <h2>GHC 99 / Month</h2>
                <h3>Your enterprise solution.</h3>
                <ul>
                    <li>10 Workspace</li>
                    <li>Unlimited Traffic</li>
                    <li>Unlimited Storage</li>
                    <li>Premium Support</li>
                </ul>
                <div>
                    <button>{{ buttonLabel }}</button>
                </div>
            </article>

            
        </div>
    </section>
</template>



<script>
export default {
    name: 'Plans',
    data() {
        return {
            buttonLabel: 'CHOOSE PLAN'
        }
    }
}
</script>



<style lang="scss" scoped>
    #plan-list {
        padding: 0 1rem;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media(max-width: 575px) {
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }

        @media(min-width: 992px) {
            min-width: 769px;
            max-width: 898px;
        }

        .plan {
            width: 30%;
            padding: 0.5rem;
            text-align: center;

            @media(max-width: 575px) {
                width: 95%;
                margin: 0.5rem 0;
            }

            &.light {
                background-color: #c9e5e9;
                height: auto;

                h1 {
                    color: #008ca5;
                    margin: 0.5rem 0;
                }

                h2 {
                    color: gray;
                    margin: 2.5rem 0;
                }

                h3 {
                    margin: 2.5rem 0;
                }

                li {
                    color: #008ca5;
                    margin: 0.5rem 0;
                }

                button {
                    margin: 2rem 0 0.5rem 0;
                    padding: 0.7rem;
                    background-color: #008ca5;
                    color: #fff;
                    font-size: 1rem;
                    font-weight: bolder;
                    border: none;
                    border-radius: 8%;
                    cursor: pointer;

                    &:hover,
                    &:focus {
                        background-color: #5aa1ad;
                        outline: none;
                    }
                }
            }

            &.deep {
                background-color: #5aa1ad;
                color: #000;
                box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);

                h1 {
                    margin: 2rem 0;

                    &#recommended {
                        background-color: #c9e5e9;
                        padding: 0.5rem;
                        border-radius: 0.5rem;
                        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
                    }
                }

                h2 {
                    margin: 2.5rem 0;
                }

                h3 {
                    margin: 2.5rem 0;
                }

                li {
                    margin: 0.5rem 0;
                }

                button {
                    margin: 2rem 0 0.5rem 0;
                    padding: 0.7rem;
                    background-color: #008ca5;
                    color: #fff;
                    font-size: 1rem;
                    font-weight: bolder;
                    border: none;
                    border-radius: 8%;
                    cursor: pointer;

                    &:hover,
                    &:focus {
                        background-color: #3b7b86;
                        outline: none;
                    }
                }
                
            }

            ul {
                list-style: none;
                margin: 0;
                padding: 0;
            }
        }
        
    }
</style>
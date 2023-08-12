<template>
    <!-- <div>
        <input type="text" placeholder="Name" v-model="firstName" />
        <input type="text" placeholder="email" v-model="email" />
        <button v-on:click="submit">Enviar</button>
    </div> -->

        <div class="mt-5 sm:flex sm:items-center">
            <div class="w-full sm:max-w-xs">
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"></path>
                        </svg>
                    </div>
                    <input type="text" name="firstname" id="firstname" v-model="firstName" class="block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ps-[38px] focus:outline-none focus:ring  sm:text-sm sm:leading-6" placeholder="Nombre" >
                </div>
            </div>
            <div class="w-full sm:max-w-xs sm:ml-3">
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                    </div>
                    <input type="text" name="email" id="email" v-model="email" class="block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ps-[38px] focus:outline-none focus:ring sm:text-sm sm:leading-6" placeholder="email@example.com" >
                </div>
            </div>
            <button v-on:click="submit"  class="focus:outline-none  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-3 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 sm:ml-3 sm:mt-0 sm:w-auto">Enviar</button>
        </div>
        

    
</template>


<script lang="ts">
    import db from '../firestoreinit'

    export default{
        data: function() {
            return{
                firstName : '',
                email : '',
            }
        },
        methods : {
            submit: function(){
                db.collection('EmailAddresses').add({
                    firstname: this.firstName,
                    email: this.email
                })
            }
        }
    }
</script>
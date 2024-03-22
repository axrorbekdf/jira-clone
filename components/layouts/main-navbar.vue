<script setup lang="ts">
import type { NuxtLink, UButton } from '#components';
import { ACCOUNT } from '~/libs/appwrite';


    const { currentUser } = useAuthStore();
    const router = useRouter();
    const toast = useToast();
    const isLoading = ref(false);
    const errors = ref('');

    const logout = async () => {
        isLoading.value = true;
        try{
            await ACCOUNT.deleteSession('current')
            .then(() => {
                router.push('auth/login')    
            });
            isLoading.value = false;
            toast.add({
                title: 'Log out',
            })

        } catch(e: any){

            toast.add({
                title: 'Error',
            })
            isLoading.value = false;
        }
    }
</script>


<template>
    <div class="h-[10vh] fixed top-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 z-50">
        
        <div class="container-fluid mx-auto flex items-center h-full justify-between">
            <nuxt-link to="/" class="flex items-center space-x-1">
                <NuxtImg src="/logo.svg" width="50" height="50" />
                <span class="text-2xl font-medium">Jira software</span>
            </nuxt-link>

            <div class="flex items-center space-x-2">
                <SharedColorMode />

                <template v-if="currentUser.status">

                    <UButton color="red" class="font-bold" @click="logout">
                        <template v-if="isLoading">
                            <Icon name="svg-spinners:3-dots-fade" class="w-5 h-5"/>
                        </template>
                        Log out
                    </UButton>

                    <NuxtLink to="/documents">
                        <UButton color="blue" variant="outline">Documents</UButton>
                    </NuxtLink>
                </template>

                <template v-else>
                    <nuxt-link to="/auth/login">
                        <UButton color="blue">Get it free</UButton>
                    </nuxt-link>
    
                    <nuxt-link to="/auth/login">
                        <UButton color="blue" variant="soft">Sign in</UButton>
                    </nuxt-link>
                </template>
            </div>
        </div>
    </div>
</template>
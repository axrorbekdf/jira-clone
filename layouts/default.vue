<script setup lang="ts">
import { ACCOUNT } from '~/libs/appwrite';


const authStore = useAuthStore();

onMounted(() => {
    ACCOUNT.get()
    .then(response => {
        authStore.set({
            id: response.$id,
            name: response.name,
            email: response.email,
            status: response.status,
        });
    })
});
</script>
<template>
    <LayoutsMainNavbar />
    <section class="min-h-screen bg-white dark:bg-black">
        <slot />
    </section>
</template>
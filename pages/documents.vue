<script setup lang="ts">

import { ACCOUNT } from '~/libs/appwrite';

definePageMeta({
        layout: "documents"
    });

    useHead({
        title: "Documents | Jira software"
    })

const router = useRouter();
const loadingStore = useLoadingStore();

    onMounted(() => {
        ACCOUNT.get()
        .then(() => {
            loadingStore.set(false)
        })
        .catch(() => {
            router.push('/auth/login')
        })
    });
</script>

<template>
    <div>
       <h2> Document Page</h2>
    </div>
</template>
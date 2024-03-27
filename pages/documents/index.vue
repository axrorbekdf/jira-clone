<script setup lang="ts">
import type { UButton } from '#components';
import { statusList  } from '~/constants';
import { useStatusQuery } from '~/query/use-status-query';

definePageMeta({
    layout: "documents"
});

useHead({
    title: "Documents | Jira software"
})

const {} = useStatusQuery();

</script>

<template>
    <div class="grid grid-cols-4 gap-4 mt-12">
       <UButton v-for="tarkib in statusList" :key="tarkib" class="w-full h-12" color="blue" variant="outline">
            <span class="fond-bold">{{ tarkib.name }}</span>
            <span class="text-sm text-neutral-500">{{ tarkib.item.length }}</span>
       </UButton>
    </div>
</template>
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

const { data } = useStatusQuery();

</script>

<template>
    <div class="grid grid-cols-4 gap-4 mt-12">
        <div v-for="(item, index) in data" :key="item.id">
            <UButton class="w-full h-12" color="blue" variant="outline">
                <span class="fond-bold">{{ item.name }}</span>
                <span class="text-sm text-neutral-500">{{ item.items.length }}</span>
            </UButton>
        </div>
        
    </div>
</template>
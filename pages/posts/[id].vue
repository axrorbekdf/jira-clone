<script setup lang="ts">

let number = 45;
const route = useRoute();

</script>

<template>
    <div>
        Document Page ID: {{ route.params.id }}
    </div>
</template>
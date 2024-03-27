<template>
    <main>
        <LayoutsNavbar />
        <LayoutsSidebar />
        <section class="min-h-screen bg-white dark:bg-black">
                <slot />
        </section>
    </main>
</template>
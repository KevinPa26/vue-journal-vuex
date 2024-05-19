<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'entry', params: {id: 10}})">
        <!-- title -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">18</span>
            <span class="mx-1 fs-5">Mayo</span>
            <span class="mx-2 fw-light">2024, sabado</span>
        </div>
        <!-- description -->
        <div class="entry-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, voluptatem aliquid iure, tenetur voluptatibus neque nam possimus quia corporis dicta adipisci! Fugit asperiores accusamus ut perferendis molestiae aliquid nostrum quam?
        </div>
    </div>
</template>

<script>
export default {
    name: 'EntryVue'
}
</script>

<style lang="scss" scoped>
    .entry-container {
        border-bottom: 1px solid #2c3e50;
        transition: 0.2 all ease-in;

        &:hover {
            background-color: lighten($color: grey, $amount: 45);
        }

        .entry-description {
            font-size: 12px;
        }
    }
    
</style>
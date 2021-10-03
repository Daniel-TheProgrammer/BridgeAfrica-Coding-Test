<template>
    <div class="card">
        <div :style="cssVars" class="cardImg">
            <img
                @click="editProd"
                class="first"
                src="https://img.icons8.com/material-outlined/50/000000/edit.png"
            />

            <img
                @click="deleteProd"
                class="second"
                src="https://img.icons8.com/material-outlined/50/000000/delete-sign.png"
            />
            <img class="background" :src="product.image" />
        </div>

        <div class="information">
            <h1>{{ product.name }}</h1>
            <p>{{ product.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    computed: {
        cssVars() {
            return {
                '--img-url': "https://picsum.photos/200/300",

            }
        }
    },
    data() {
        return {
            imageUrl: String,
            productName: String,
            productDesc: String
        }
    },
    props: {
        product: {
            type: Object,
            required: true
        }
    }, methods: {
        async deleteProd() {
            console.log(this.product.id);
            this.$emit('delete', this.product.id)

        },
        async editProd() {
            this.$emit('edit', this.product)
        }
    }
}
</script>

<style scoped>
.background {
    z-index: -1;
    width: 100%;
    height: 100%;
}
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 400px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}

.cardImg {
    width: 400px;
    height: 300px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
}

.first {
    float: right;
}
</style>
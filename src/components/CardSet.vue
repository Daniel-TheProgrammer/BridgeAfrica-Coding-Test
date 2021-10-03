

<template>
    <div v-if="form" class="form">
        <form @submit="addProduct" class="login-form">
            <input ref="name" type="text" placeholder="Name of product" />
            <textarea ref="desc" type="text-area" placeholder="Enter Description of product"></textarea>
            <input ref="image" type="text" placeholder="URL of Image" />
            <input ref="price" type="text" placeholder="Price of product" />
            <div style="display:flex;flex-direction:horizontal">
                <label>Item is on discount</label>
                <input ref="discount" type="checkbox" />
            </div>
            <br />
            <button type="submit">Submit</button>
            <br />
            <br />
            <button @click="closeForm">Close</button>
        </form>
    </div>
    <div v-if="editing" class="form">
        <form @submit="editProduct" class="login-form">
            <input ref="nameEdit" type="text" placeholder="Name of product" :value="editName" />
            <textarea
                ref="descEdit"
                type="text-area"
                placeholder="Enter Description of product"
                :value="editDesc"
            ></textarea>
            <input ref="imageEdit" type="text" placeholder="URL of Image" :value="editURL" />
            <input ref="priceEdit" type="text" placeholder="Price of product" :value="editPrice" />

            <br />
            <button type="submit">Submit</button>
            <br />
            <br />
            <button @click="closeForm">Close</button>
        </form>
    </div>
    <div class="cardSet">
        <EditCard @click="formToggle"></EditCard>
        <ProductCard
            v-for="(product, index) in products"
            :key="index"
            :product="product"
            @delete="deleteProduct"
            @edit="editProductEmit"
        ></ProductCard>
    </div>
</template>

<script>
import ProductCard from "./ProductCard.vue"
import EditCard from "./EditCard.vue"
import { ref } from "@vue/reactivity";
export default {
    components: {
        ProductCard, EditCard
    }, data() {
        return {
            form: false,
            editing: false,
            products: {},
            componentKey: 0,
            editName: "",
            editDesc: "",
            editURL: "",
            editPrice: "",
            editId: 0
        }
    }, methods: {
        forceRerender() {
            this.componentKey += 1;
        },
        formToggle() {
            this.form = true;
        }, closeForm() {
            this.form = false;
        },
        async editProductEmit(e) {
            this.editName = e.name;
            this.editDesc = e.description;
            this.editURL = e.image;
            this.editPrice = e.price;
            this.editId = e.id;
            this.editing = true;
        },
        async editProduct(e) {
            e.preventDefault();
            console.log(this.editId);
            const product = {
                name: this.$refs.nameEdit.value,
                description: this.$refs.descEdit.value,
                image: this.$refs.imageEdit.value,
                price: this.$refs.priceEdit.value,
            }

            console.log(product);

            await fetch(`/api/products/${this.editId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: product.name,
                    description: product.description,
                    image: product.image,
                    price: product.price
                })
            })

            // await this.$http.put(`/api/products/${e.target.id}`, product);
            this.editing = false;
            window.location.reload();
        },
        async deleteProduct(e) {
            console.log(e);
            await fetch('/api/products/' + e, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            this.products.splice(e, 1)
            window.location.reload();

        }
        ,
        async getProducts() {
            const response = await fetch('/api/products');
            const products = await response.json();
            this.products = products;
        }
        , async addProduct(e) {
            e.preventDefault();
            let product = {
                name: this.$refs.name.value,
                description: this.$refs.desc.value,
                image: this.$refs.image.value,
                price: this.$refs.price.value,
                discount: this.$refs.discount.checked
            }
            await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
            // this.form = false;
            window.location.reload();

        }

    }, created() {
        this.getProducts();
    }
}
</script>

<style scoped>
.cardSet {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 -1rem;
}

.form {
    /* position: relative; */
    /* margin-top: auto; */
    z-index: 2;
    display: flex;
    background: #ffffff;
    max-width: 500px;
    margin: 50px auto 100px;
    padding: 45px;
    text-align: center;

    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

textarea {
    width: 100%;
}
.form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
}
.form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #fda604;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
    background: #43a047;
}
.form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
}
.form .message a {
    color: #4caf50;
    text-decoration: none;
}
.form .register-form {
    display: none;
}

p {
    margin-top: 10px;
}
</style>
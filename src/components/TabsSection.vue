<template>
    <div class="container">
        <div class="menus-setiing">
            <a href="#" class="settings">Settings</a>
        </div>
    </div>
    <div class="tabs-section">
        <ul class="nav nav-tabs">
            <li class="active">
                <div class="tab">
                    <a href="#">Business</a>
                </div>
            </li>
            <li>
                <div class="tab">
                    <a href="#">Inbox</a>
                </div>
            </li>
            <li>
                <div class="tab">
                    <a href="#">Notifications</a>
                </div>
            </li>
            <li>
                <div class="tab">
                    <a href="#">Pending Posts</a>
                </div>
            </li>
            <li>
                <div class="tab">
                    <a href="#">Insights</a>
                </div>
            </li>
        </ul>

        <div class="imageSet">
            <img src="../assets/1.png" />
            <img src="../assets/2.png" />
            <img src="../assets/3.png" />
            <img src="../assets/4.png" />
            <img src="../assets/1.png" />
        </div>
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import ImageSet from "./ImageSet.vue";
import ImageSet from "./ImageSet.vue";
export default {
    cononents: {
        ImageSet
    }
}
</script>

<style scoped>
.menus-setiing {
    text-align: right;
}
.menus-setiing a {
    color: #e75c18 !important;
    text-decoration: underline !important;
}

.tabs-section {
    padding-top: 30px;
}

.tabs-section {
    border: unset !important;
}

.tab {
    border: 1px solid #e5e5e5;
    border-radius: 5px 5px 0 0;
    /* padding: 10px; */
    width: 120px;
    text-align: center;
    /* margin-right: 10px; */
    /* margin-bottom: 10px; */
}
.active {
    border-bottom: 1px solid #e5e5e5;
    background-color: #e5e5e5;
    margin-left: 50px;
}

a {
    font-size: small;
    text-decoration: none;
    color: gray;
}

.imageSet {
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: row;
    /* justify-content: space-around; */
    margin-top: 20px;
    justify-content: center;
}

img{
    width:15%;
}
</style>
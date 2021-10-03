<template>
    <div class="banner">
        <div class="banner__image">
            <img src="../assets/3.png" alt="banner image" />
            <div class="banner__content">
                <h1 class="banner__title">Mapoure Agrobusiness</h1>
                <p class="banner__subtitle">@mapoureagrobusiness</p>
            </div>
        </div>
        <button class="btn btn-success">Promote</button>
        <button class="btn btn-warning">Contact</button>
        <button class="btn btn-danger">Website</button>
    </div>

    <div class="navigationBar">
        <button class="btn nbtn">Home</button>
        <button class="btn nbtn selected">About</button>
        <button class="btn nbtn">Media</button>
        <button class="btn nbtn">Market Place</button>
        <button class="btn nbtn">Networks</button>
        <button class="btn nbtn">Followers</button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navigationBar {
    display: flex;
    justify-content: space-around;
    margin-left: 180px;
    margin-right: 180px;
    padding: 10px;
    border-radius: 10px;
}

.selected {
    background-color: #e75c18;
    color: white;
}

.nbtn {
    border: 1px solid #ccc;
    /* border-radius: 10px; */
    margin: 0;
    width: 100%;
}
.nbtn:hover {
    background-color: #e75c18;
    color: white;
}
button {
    margin: 10px;
}
.banner {
    display: flex;
    margin-top: 20px;
    margin-left: 180px;
    margin-right: 180px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    /* min-height: 100vh; */
    /* background-color: #fafafa; */
}

.banner__image {
    display: flex;
    flex-direction: row;
}

.banner__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    margin-left: 20px;
}

img {
    width: 10%;
    height: 10%;

    border-radius: 50px;
}

h1 {
    font-size: 1.5em;
}
p {
    font-size: 1em;
}
</style>
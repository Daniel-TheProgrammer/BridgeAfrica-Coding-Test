<template>
    <a href="#">
        <div class="card">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 171 171"
                style=" fill:#000000;"
            >
                <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                >
                    <path d="M0,171.99654v-171.99654h171.99654v171.99654z" fill="none" />
                    <g fill="#ffffff">
                        <path
                            d="M85.5,6.84c-43.40221,0 -78.66,35.25779 -78.66,78.66c0,43.40221 35.25779,78.66 78.66,78.66c43.40221,0 78.66,-35.25779 78.66,-78.66c0,-43.40221 -35.25779,-78.66 -78.66,-78.66zM85.5,13.68c39.7056,0 71.82,32.1144 71.82,71.82c0,39.7056 -32.1144,71.82 -71.82,71.82c-39.7056,0 -71.82,-32.1144 -71.82,-71.82c0,-39.7056 32.1144,-71.82 71.82,-71.82zM85.44656,58.09324c-1.88619,0.02948 -3.39239,1.58052 -3.36656,3.46676v20.52h-20.52c-1.23337,-0.01744 -2.3806,0.63056 -3.00238,1.69589c-0.62178,1.06532 -0.62178,2.38291 0,3.44823c0.62178,1.06532 1.769,1.71333 3.00238,1.69589h20.52v20.52c-0.01744,1.23337 0.63056,2.3806 1.69589,3.00238c1.06532,0.62178 2.38291,0.62178 3.44823,0c1.06532,-0.62178 1.71333,-1.769 1.69589,-3.00238v-20.52h20.52c1.23337,0.01744 2.3806,-0.63056 3.00238,-1.69589c0.62178,-1.06532 0.62178,-2.38291 0,-3.44823c-0.62178,-1.06532 -1.769,-1.71333 -3.00238,-1.69589h-20.52v-20.52c0.01266,-0.92443 -0.34944,-1.81461 -1.0038,-2.46771c-0.65436,-0.6531 -1.54523,-1.01349 -2.46963,-0.99905z"
                        />
                    </g>
                </g>
            </svg>
            Add Product/Services
        </div>
    </a>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
    text-decoration: none;
}
.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: gray;
    color: aliceblue;
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
    background-image: url("../assets/addImg.jpg");
}

img {
    float: right;
}
</style>
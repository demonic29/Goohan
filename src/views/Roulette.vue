<template>
    <div class="circle">
        <div class="triangle"></div>
        <div class="triangle2"></div>
        <div class="triangle3"></div>
        <div class="triangle4"></div>
        
    </div>
</template>

<script>
    export default {
        name : "Roulette"
    }
</script>

<style>

.circle {
    width: 100px;
    height: 100px;
    background-color: red; /* Adjust color as needed */
    border-radius: 50%; /* This makes it a circle */
}

.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red; /* Adjust color as needed */
}

.triangle2 {
    

    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid red; /* Adjust color as needed */
}
.triangle3 {
    
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red; /* Adjust color as needed */
    transform: rotate(90deg);
}
.triangle4{
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red; /* Adjust color as needed */

}

   body {
    background-color: #FF8D3B;
   }
</style>
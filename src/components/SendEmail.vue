<template>
  <div class="send-email">
    <input type="text" placeholder="Your E-mail" />
    <button>SUBSCRIBE</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.send-email {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
}
input[type="text"] {
  display: block;
  font-size: 14px;
  font-family: "Lato Regular Normal", sans-serif;
  font-weight: 400;
  width: 60%;
  box-sizing: border-box;
  padding: 1.923% 3.8461%;
  outline: none;
  border: 0;
  color: #a5a5a7;
}
button {
  background-color: #ff565c;
  outline: none;
  border: 0;
  font-family: "Oswald Medium Normal", sans-serif;
  width: 40%;
  box-sizing: border-box;
  padding: 3.0769% 5.7692%;
  color: white;
  font-size: 12px;
  font-weight: medium;
  cursor: pointer;
}
</style>

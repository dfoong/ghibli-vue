<template>
  <div id="app">
    <h1>Mini Ghibli World</h1>
    <div id="navigation">
      <ul>
<li><a href="#/">home</a></li>
<li><a href="#/music">music</a></li>
<li><a href="#/recipes">recipes</a></li>
<li><a href="#/about">about</a></li>
</ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
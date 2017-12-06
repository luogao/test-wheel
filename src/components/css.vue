<template>
  <div>
      <h1 data-text="加载中…" class="css-text-loading">加载中…</h1>
  </div>
</template>
<style>
h1.css-text-loading {
  background-color: #1565c0;
  position: relative;
  color: rgba(0, 0, 0, 0.3);
  font-size: 5em;
}
h1.css-text-loading:before {
  content: attr(data-text);
  position: absolute;
  overflow: hidden;
  max-width: 100%;
  white-space: nowrap;
  color: #fff;
  animation: loading 1s linear infinite alternate;
}
@keyframes loading {
  0% {
    max-width: 0;
  }
}
</style>


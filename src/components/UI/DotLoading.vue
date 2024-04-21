<template>
<div class="container">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
</template>

<style scoped>
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15x);
  }
  60% {
    transform: translateY(-10px);
  }
}

.dot {
  width: 10px;
  height: 10px;
  background-color: var(--color-background-grey-light);
  border-radius: 50%;
  display: inline-block;
  animation: bounce 1.2s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.8s;
  }
}

.container {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100px;
}
</style>
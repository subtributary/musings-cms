<script setup lang="ts"></script>
<template>
  <svg
    aria-hidden="true"
    class="icon"
    fill="none"
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <g id="tooth">
        <path d="M9.5,5.4 l1,-3h3l1,3" />
      </g>
    </defs>
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="12" r="7" />
    <use href="#tooth" transform="rotate(0,12,12)" />
    <use href="#tooth" transform="rotate(60,12,12)" />
    <use href="#tooth" transform="rotate(120,12,12)" />
    <use href="#tooth" transform="rotate(180,12,12)" />
    <use href="#tooth" transform="rotate(240,12,12)" />
    <use href="#tooth" transform="rotate(300,12,12)" />
  </svg>
</template>

<template>
  <span class="badge-time">
    <svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
    {{ minutes }} 分钟
  </span>
</template>

<script setup lang="ts">
defineProps<{
  minutes: number
}>()
</script>

<style scoped>
.badge-time {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 11px;
  border-radius: 20px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  background: rgba(3, 105, 161, 0.06);
  color: #0369A1;
  vertical-align: middle;
  margin-left: 8px;
}

.icon {
  width: 13px;
  height: 13px;
  opacity: 0.6;
}
</style>

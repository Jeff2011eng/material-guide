<template>
  <span :class="['badge-diff', level]">
    <span class="dot"></span>
    {{ label }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  level: 'easy' | 'medium' | 'hard'
}>()

const label = computed(() => {
  const map = { easy: '简单', medium: '中等', hard: '复杂' }
  return map[props.level]
})
</script>

<style scoped>
.badge-diff {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 11px;
  border-radius: 20px;
  font-family: "Plus Jakarta Sans", "PingFang SC", sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  vertical-align: middle;
  margin-left: 10px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.easy {
  background: rgba(5, 150, 105, 0.07);
  color: #059669;
}
.easy .dot { background: #10B981; }

.medium {
  background: rgba(217, 119, 6, 0.07);
  color: #B45309;
}
.medium .dot { background: #F59E0B; }

.hard {
  background: rgba(220, 38, 38, 0.07);
  color: #DC2626;
}
.hard .dot { background: #EF4444; }
</style>

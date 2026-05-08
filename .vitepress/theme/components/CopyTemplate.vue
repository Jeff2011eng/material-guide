<template>
  <div class="copy-card">
    <div class="copy-head">
      <div class="copy-label">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        <span>提交模板</span>
      </div>
      <button class="copy-btn" :class="{ copied }" @click="copyText">
        <svg v-if="!copied" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        <svg v-else width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        {{ copied ? '已复制' : '复制' }}
      </button>
    </div>
    <div class="copy-body">
      <pre>{{ text }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  text: string
}>()

const copied = ref(false)

async function copyText() {
  try {
    await navigator.clipboard.writeText(props.text)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = props.text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}
</script>

<style scoped>
.copy-card {
  margin: 20px 0;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  overflow: hidden;
  background: #FFFFFF;
  transition: border-color 200ms ease;
}

.copy-card:hover {
  border-color: #0EA5E9;
}

.copy-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 16px;
  background: #F8FAFC;
  border-bottom: 1px solid #F1F5F9;
}

.copy-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  color: #475569;
}

.copy-label svg {
  opacity: 0.4;
  flex-shrink: 0;
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border-radius: 6px;
  border: 1px solid #0369A1;
  background: transparent;
  color: #0369A1;
  cursor: pointer;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  transition: all 150ms ease;
}

.copy-btn:hover {
  background: #0369A1;
  color: white;
}

.copy-btn.copied {
  border-color: #059669;
  color: #059669;
  cursor: default;
}

.copy-btn.copied:hover {
  background: rgba(5,150,105,0.07);
  color: #059669;
}

.copy-body {
  padding: 14px 18px;
}

.copy-body pre {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.85;
  font-family: "JetBrains Mono", "Fira Code", "PingFang SC", monospace;
  color: #475569;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>

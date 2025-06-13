<script lang="ts" setup>
import { Toaster as Sonner, type ToasterProps } from "vue-sonner";

const props = defineProps<ToasterProps>();
</script>

<template>
  <Sonner
    class="toaster group"
    v-bind="props"
    :style="{
      '--normal-bg': '#18181b',
      '--normal-text': '#f4f4f5',
    }"
  />
</template>

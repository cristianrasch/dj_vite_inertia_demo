<template>
  <h1 v-text="page_title"></h1>
  <div v-html="logoUrl"></div>
  <Link href="/">Go back</Link>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'

import logoUrl from './1p21-logo.svg?raw'

const props = defineProps({
  page_title: String,
})
</script>

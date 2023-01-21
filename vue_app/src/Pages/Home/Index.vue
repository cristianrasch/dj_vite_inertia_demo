<template>
  <h1 v-text="greeting"></h1>
  <Link :href="aboutPath">Follow me</Link>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'

// Dump with:
// manage.py dump_routes_resolver --format=es6 --output=vue_app/src/lib/django-routes.js
import reverseUrl from '../../lib/django-routes'

const props = defineProps({
  greeting: String,
})

const aboutPath = reverseUrl('about')
</script>

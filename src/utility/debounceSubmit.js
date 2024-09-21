let timer

export function debounceSubmit(form, ms = 500) {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => form.requestSubmit(), ms)
}

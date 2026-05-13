export const EMAILJS_CONFIG = {
  serviceId: 'service_v8rv53z',
  templateId: 'template_c8zhcrf',
  publicKey: 'ZQYNy8lsoaaHA7mrs',
}

export function hasEmailJsConfig() {
  return Object.values(EMAILJS_CONFIG).every(
    (value) => value && !value.startsWith('YOUR_EMAILJS_'),
  )
}

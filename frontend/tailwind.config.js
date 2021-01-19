module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.svelte", "./src/**/*.html"],
  theme: {
    extend: {
      colors: {
      }
    },
  },
  variants: {
    placeholderColor: [],
    backgroundColor: ['responsive','hover','focus','active'],
    rotate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
}

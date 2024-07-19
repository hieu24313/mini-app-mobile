module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  },
  theme: {
    extend: {
      colors: {
        customGreen: 'rgba(76, 180, 39, 1)',
      },
    },
  },
};

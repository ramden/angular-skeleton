// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Theme options
  theme: {
    defaultTheme: 'lumen', // All available themes are found here: https://bootswatch.com
    themeBoxVisible: true,
    bootswatchThemes: [
      'Cerulean',
      'Cosmo',
      'Cyborg',
      'Darkly',
      'Flatly',
      'Journal',
      'Litera',
      'Lumen',
      'Lux',
      'Materia',
      'Minty',
      'Pulse',
      'Sandstone',
      'Simplex',
      'Sketchy',
      'Slate',
      'Solar',
      'Spacelab',
      'Superhero',
      'United',
      'Yeti',
    ]
  },
  auth: {
    logoUrl: 'https://raw.githubusercontent.com/vadymmarkov/Fakery/master/Images/logo.png',
    registrationEnabled: true,
    resetPasswordEnabled: true
  }
};

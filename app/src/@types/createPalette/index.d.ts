import * as createPalette from '@material-ui/core/styles/createPalette';

// Documentation for adding additional keys/options
// https://medium.com/@egctoru/extend-material-ui-theme-in-typescript-a462e207131f

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    // Add custom keys here
    mockup?: createPalette.PaletteColorOptions;
  }

  interface Palette {
    mockup: PaletteColor;
  }
}
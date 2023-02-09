type Viewport = {
  name: string;
  styles: StorybookStyles;
  type: 'mobile' | 'tablet' | 'desktop';
};

type StorybookStyles = {
  height: number;
  width: number;
};

function convertToPixels(viewport: Viewport) {
  const { name, type } = viewport;
  return {
    name,
    styles: {
      height: `${viewport.styles.height}px`,
      width: `${viewport.styles.width}px`,
    },
    type,
  };
}

function getViewportWidths(viewport: Viewport) {
  return viewport.styles.width;
}

const viewports: Record<string, Viewport> = {
  googlePixel2: {
    name: 'Google Pixel 2',
    styles: {
      width: 411,
      height: 823,
    },
    type: 'mobile',
  },
  ipadMini: {
    name: 'iPad Mini',
    styles: {
      width: 768,
      height: 1024,
    },
    type: 'tablet',
  },
  ipadPro: {
    name: 'iPad Pro',
    styles: {
      width: 1024,
      height: 1366,
    },
    type: 'tablet',
  },
  chromebook: {
    name: 'Chromebook',
    styles: {
      width: 1366,
      height: 768,
    },
    type: 'desktop',
  },
  macbookPro: {
    name: 'MacBook Pro',
    styles: {
      width: 1440,
      height: 900,
    },
    type: 'desktop',
  },
};

export const storybookViewports = {
  googlePixel2: convertToPixels(viewports.googlePixel2),
  ipadMini: convertToPixels(viewports.ipadMini),
  ipadPro: convertToPixels(viewports.ipadPro),
  chromebook: convertToPixels(viewports.chromebook),
  macbookPro: convertToPixels(viewports.macbookPro),
};

export const chromaticViewports = {
  googlePixel2: getViewportWidths(viewports.googlePixel2),
  ipadMini: getViewportWidths(viewports.ipadMini),
  ipadPro: getViewportWidths(viewports.ipadPro),
  chromebook: getViewportWidths(viewports.chromebook),
  macbookPro: getViewportWidths(viewports.macbookPro),
};

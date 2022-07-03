import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  media: {
    md: "(min-width: 600px)",
    ld: "(min-width: 900px)",
    xld: "(min-width: 1200px)",
  },
});

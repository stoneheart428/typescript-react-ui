import * as React from 'react';
import { Svg } from '../svg';
import type { BoxProps } from '../box/types';

export const PadlockIcon: React.FC<BoxProps> = props => (
  <Svg width="64" height="64" fill="none" viewBox="0 0 64 64" {...props}>
    <path
      d="M0 25.6C0 16.6392 0 12.1587 1.7439 8.73615C3.27787 5.72556 5.72556 3.27787 8.73615 1.7439C12.1587 0 16.6392 0 25.6 0L38.4 0C47.3608 0 51.8413 0 55.2638 1.7439C58.2744 3.27787 60.7221 5.72556 62.2561 8.73615C64 12.1587 64 16.6392 64 25.6V38.4C64 47.3608 64 51.8413 62.2561 55.2638C60.7221 58.2744 58.2744 60.7221 55.2638 62.2561C51.8413 64 47.3608 64 38.4 64H25.6C16.6392 64 12.1587 64 8.73615 62.2561C5.72556 60.7221 3.27787 58.2744 1.7439 55.2638C0 51.8413 0 47.3608 0 38.4L0 25.6Z"
      fill="currentColor"
      opacity="0.15"
    />
    <path
      d="M40.7273 26.7143H39.6364V23.5C39.6364 21.5109 38.8318 19.6032 37.3997 18.1967C35.9676 16.7902 34.0253 16 32 16C29.9747 16 28.0324 16.7902 26.6003 18.1967C25.1682 19.6032 24.3636 21.5109 24.3636 23.5V26.7143H23.2727C22.405 26.7152 21.5732 27.0542 20.9596 27.6568C20.3461 28.2594 20.001 29.0764 20 29.9286V42.7857C20.001 43.6379 20.3461 44.4549 20.9596 45.0575C21.5732 45.6601 22.405 45.9991 23.2727 46H40.7273C41.595 45.9991 42.4268 45.6601 43.0404 45.0575C43.6539 44.4549 43.999 43.6379 44 42.7857V29.9286C43.999 29.0764 43.6539 28.2594 43.0404 27.6568C42.4268 27.0542 41.595 26.7152 40.7273 26.7143ZM26.5455 23.5C26.5455 22.0792 27.1201 20.7166 28.1431 19.7119C29.166 18.7073 30.5534 18.1429 32 18.1429C33.4466 18.1429 34.834 18.7073 35.8569 19.7119C36.8799 20.7166 37.4545 22.0792 37.4545 23.5V26.7143H26.5455V23.5Z"
      fill="currentColor"
    />
  </Svg>
);

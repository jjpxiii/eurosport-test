/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  playerStats: {
    id: `${scope}.playerStats.header`,
    defaultMessage: 'Player Statistics',
  },
});

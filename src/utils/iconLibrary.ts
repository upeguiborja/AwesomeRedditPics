import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import {faMessage} from '@fortawesome/free-regular-svg-icons';

export function setupIconLibrary() {
  library.add(faMessage, faArrowCircleUp, faArrowCircleDown);
}

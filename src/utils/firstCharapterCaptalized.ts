
import { toLower, toUpper } from 'lodash';

const firstCharapterCaptalized = (text: string) => {
  return toUpper(text.substring(0, 1)) + toLower(text.substring(1, text.length));
}

export default firstCharapterCaptalized;

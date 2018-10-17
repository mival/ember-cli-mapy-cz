import { helper } from '@ember/component/helper';
import { htmlSafe as safeString} from '@ember/string';

export function htmlSafe(params/*, hash*/) {
  return safeString(params.join(''));
}

export default helper(htmlSafe);

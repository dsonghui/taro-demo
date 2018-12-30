/**
 *
 * Author: david.deng<david.deng@jcinfotech.com>
 * Date: 2018/5/2
 */
import dayjs from 'dayjs';

export default class Filters {
  static sex(sex) {
    return Number(sex) === 1 ? '男' : (Number(sex) === 2 ? '女' : '未知');
  }
  static date_format(date, format = 'YYYY-MM-DD') {
    return dayjs(date).isValid() ? dayjs(date).format(format) : '-';
  }
}

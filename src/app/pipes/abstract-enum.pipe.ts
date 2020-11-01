import {PipeTransform} from "@angular/core";

export abstract class AbstractEnumPipe<T> implements PipeTransform {

  map = null;

  transform(value): string {
    if (this.map == null) {
      this.map = [];
      this.init();
    }
    let res = this.map[value];
    if (res == null)
      res = value;
    return res;
  }

  abstract init();
}

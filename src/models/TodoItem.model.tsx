export interface ITodoItem {
  id: number;

  descr: string;
  num: number;
}

export default class TodoItem implements ITodoItem {
  id: number;

  descr: string;
  num: number;

  constructor(id: number, descr: string, num: number) {
    this.id = id;

    this.descr = descr;
    this.num = num;
  }
}

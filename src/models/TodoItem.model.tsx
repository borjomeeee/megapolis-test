export interface ITodoItem {
  id: number;

  descr: string;
}

export default class TodoItem implements ITodoItem {
  id: number;

  descr: string;

  constructor(id: number, descr: string) {
    this.id = id;

    this.descr = descr;
  }
}

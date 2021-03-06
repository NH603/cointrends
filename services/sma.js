class SMA {
  constructor(length) {
    this.age = 0;
    this.sum = 0;
    this.result = 0;
    this.data = new Array(length);
  }

  update(value) {
    let last = this.data[this.age] || 0;
    this.data[this.age] = value;

    this.sum += value - last;
    this.result = this.sum / this.data.length;
    this.age = (this.age + 1) % this.data.length;
  }

  get result() {
    return this.result;
  }
}
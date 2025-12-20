export default class ColumnChart {
  chartHeight = 50;

  #data = [];
  #label = '';
  #value = null;
  #link = null;
  #element = null;

  formatHeading = (data) => `${data}`;

  constructor({ data, label, value, link, formatHeading } = {}) {
    this.#data = data ?? this.#data;
    this.#label = label ?? this.#label;
    this.#value = value ?? this.#value;
    this.#link = link ?? this.#link;
    this.formatHeading = formatHeading || this.formatHeading;

    this.#element = document.createElement('div');
    this.#element.classList.add('column-chart');

    if (!this.#data.length) {
      this.#element.classList.add('column-chart_loading');
    }

    this.render();
  }

  set html(content) {
    this.#element.innerHTML = content;
  }

  get element() {
    return this.#element;
  }

  renderSkeleton() {
    return `<img src="charts-skeleton.svg" />`;
  }

  renderLink() {
    return this.#link
      ? `<a href="${this.#link}" class="column-chart__link">View all</a>`
      : '';
  }

  renderHeader() {
    return `<div class="column-chart__header">${this.formatHeading(this.#value)}</div>`;
  }

  renderChart() {
    const maxValue = Math.max(...this.#data);
    const scale = this.chartHeight / maxValue;

    const elems = this.#data.map((val) => `<div style="--value:${Math.floor(val * scale)}" data-tooltip="${(val / maxValue * 100).toFixed(0)}%"></div>`);

    return `
        <div class="column-chart__chart">
            ${elems.join('')}
        </div>
    `;
  }

  renderContainer() {
    return `
        <div class="column-chart__container">
            ${this.renderHeader()}
            ${this.#data.length ? this.renderChart() : this.renderSkeleton()}
        </div>
    `;
  }

  renderTitle() {
    return `
        <div class="column-chart__title">
            ${this.#label} ${this.renderLink()}
        </div>
    `;
  }

  render() {
    this.html = this.renderTitle() + this.renderContainer();
  }

  remove() {
    this.#element.remove();
  }

  destroy() {
    //TODO: а что должно происходить?
  }

  update(data) {
    this.#data = data;
    this.render();
  }
}

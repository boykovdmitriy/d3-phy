import * as d3 from 'd3';

const pieWidth = 10;
const distanse = 20;
const randomNumber = () => Math.floor(Math.random() * 10);

export const POS_COLORS = [
  '#ffd76b',
  '#ffbf00',
  '#a5e4b0',
  '#5bba6f',
  '#06aed5',
  '#F8A8B8',
  '#ed254e',
  '#1d7874',
  '#b4b0b0',
  '#5bba6f',
  '#ffbf00',
  '#9cdfef',
  '#afafae',
  '#bde3c5',
  '#ffe699',
  '#F8A8B8',
  '#ed254e',
  '#1d7874',
  '#f4f4f4',
  '#A6CAC8',
];

export function render({width, height, items}) {
  const dataPie = d3.pie();
  const radius = height;
  const count = Math.floor((height) / (pieWidth * 2));
  const length = items.length;
  const svg = d3.select('#root')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');
  const arcs = [];
  const paths = [];

  for (let i = 0; i < count; i++) {
    arcs
      .push(
        d3.arc()
          .outerRadius(radius - (distanse + pieWidth) * i)
          .innerRadius((d) => radius - (distanse + pieWidth) * i - pieWidth + randomNumber())
          .cornerRadius(10));
    const path = svg
      .append('g')
      .attr('class', () => {
        return randomNumber() % 2 === 0 ? 'pie-left' : 'pie-right';
      })
      .selectAll('path')
      .data(dataPie(items))
      .enter()
      .append('path')
      .attr('stroke', 'black')
      .attr('fill', (d, position) => POS_COLORS[position])
      .attr('stroke-width', (v, position) => {
        const locWidth = 4 - (4/length)*position;
        return `${locWidth}px`;
      })
      .attr('class', 'size-animation')
      .attr('d', arcs[i]);
    paths.push(path);
  }
}
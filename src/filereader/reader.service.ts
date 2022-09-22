import { readFileSync, writeFileSync } from 'fs';
import * as _ from 'lodash';
import { join } from 'path';

import { Injectable } from '@nestjs/common';

@Injectable()
export class FileReaderService {
  constructor() {
    this.generateData('../../data/7.csv');
  }
  generateData(path: string) {
    const _path = join(__dirname, path);
    const file = readFileSync(join(__dirname, path));

    // csv to json
    const result = [];
    const lines = file.toString().replace(/\"/g, '').split('\n');
    const keys = lines[0].split(',');
    const data: any[] = [];
    for (let i = 1; i < lines.length; i++) {
      const d = {};
      const ele = lines[i].split(',');
      keys.map((key, index) => {
        d[key] = ele[index];
      });
      data.push(d);
    }

    console.log(data);

    // const a = [{ id: 1, name: 'a' }, { id: 1, name: 'b' }, { id: 3, name: 'c' }];
    // _(a).groupBy('id')
    // =>
    // { 1 : [{ id: 1, name: 'a' },  { id: 1, name: 'b' }],
    //   2 : [{ id: 2, name: 'b' }],
    //   3 : [{ id: 3, name: 'c' }] }
    // $ npm i --save lodash @types/lodash
    const rr = _(data)
      .groupBy('denom')
      .map((g) => {
        console.log(g.length);
        return {
          key: g[0].denom,
          values: g.map((d, i) => ({
            x: i,
            y: Number(d.dayVolume),
          })),
        };
      })
      .take(20)
      .value();
    writeFileSync(
      join(__dirname, '../../output/7.json'),
      JSON.stringify(rr, null, 2),
    );
  }
}

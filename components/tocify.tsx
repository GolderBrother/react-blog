/*
 * @Author: golderBrother
 * @Date: 2019-10-28 16:34:25
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-10-29 18:29:56
 * @Description: 导航目录插件
 */
/* Tips:
使用这个文件的两个必要条件

你的程序员中使用了Ant DesignUI库，因为它里边的导航部分，使用了antd的Anchor组件
安装lodash模块，这个可以直接使用yarn add lodash来安装 */
import React from "react";
import { Anchor } from "antd";
import last from 'lodash/last';
const { Link } = Anchor;
export interface TocItem {
  anchor: string;
  level: number;
  text: string;
  children?: Array<TocItem>;
}
// TOC目录树结构
export type TocItems = Array<TocItem>;

export default class Tocify {
  private tocItems: TocItems = [];
  private index: number = 0;

  constructor() {
    this.tocItems = [];
    this.index = 0;
  }

  add(text: string, level: number): string {
    const anchor: string = `top${level}${++this.index}`;
    const item: TocItem = { anchor, level, text };
    const items: TocItems = this.tocItems;

    if (items.length === 0) {
      // 第一个 item 直接 push
      items.push(item);
    } else {
      // 类型断言，还有另外一种写法 <TocItem>last(items),但是在jsx中只能只用as语法
      let lastItem = last(items) as TocItem; // 最后一个 item

      if (item.level > lastItem.level) {
        // item 是 lastItem 的 children
        for (let i = lastItem.level + 1; i <= 2; i++) {
          const { children } = lastItem;
          if (!children) {
            // 如果 children 不存在
            lastItem.children = [item];
            break;
          }

          lastItem = last(children) as TocItem; // 重置 lastItem 为 children 的最后一个 item

          if (item.level <= lastItem.level) {
            // item level 小于或等于 lastItem level 都视为与 children 同级
            children.push(item);
            break;
          }
        }
      } else {
        // 置于最顶级
        items.push(item);
      }
    }
    return anchor;
  }

  reset: Function = (): void => {
    this.index = 0;
    this.tocItems = [];
  };

  // 递归 render
  renderToc: Function = (items: TocItems) => {
    return items.map((item: TocItem) => (
      <Link key={item.anchor} href={`#${item.anchor}`} title={item.text}>
        {item.children && this.renderToc(item.children)}
      </Link>
    ));
  };

  render() {
    return (
      <Anchor affix showInkInFixed>
        {this.renderToc(this.tocItems)}
      </Anchor>
    );
  }
}

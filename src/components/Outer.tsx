import { Component, h, Host } from "@stencil/core";

@Component({ tag: "bug-outer", scoped: true })
export class Outer {
  render() {
    return (
      <Host>
        <div class="outer">
          <h2>Blue elements should below this line</h2>
          <div class="outer__inner">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}

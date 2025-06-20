import { Component, h, Host } from "@stencil/core";

@Component({ tag: "bug-outer", scoped: true })
export class Outer {
  render() {
    <Host>
      <div class="outer">
        <h2>Elements should be here</h2>
        <div class="outer__inner">
          <slot></slot>
        </div>
      </div>
    </Host>;
  }
}

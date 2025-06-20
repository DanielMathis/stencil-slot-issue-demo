import { Component, h, Host, Prop } from "@stencil/core";

@Component({ tag: "bug-inner", scoped: true })
export class Inner {
  @Prop() t = "";

  render() {
    return (
      <Host>
        <div class="inner">
          <span class="inner_title">{this.t}</span>
          <span class="inner_value">
            <slot></slot>
          </span>
        </div>
      </Host>
    );
  }
}

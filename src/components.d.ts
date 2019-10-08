/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface UcSideDrawer {
    'open': boolean;
    'openSideDrawer': () => void;
    'title': string;
  }
  interface UcSideDrawerAttributes extends StencilHTMLAttributes {
    'open'?: boolean;
    'title'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'UcSideDrawer': Components.UcSideDrawer;
  }

  interface StencilIntrinsicElements {
    'uc-side-drawer': Components.UcSideDrawerAttributes;
  }


  interface HTMLUcSideDrawerElement extends Components.UcSideDrawer, HTMLStencilElement {}
  var HTMLUcSideDrawerElement: {
    prototype: HTMLUcSideDrawerElement;
    new (): HTMLUcSideDrawerElement;
  };

  interface HTMLElementTagNameMap {
    'uc-side-drawer': HTMLUcSideDrawerElement
  }

  interface ElementTagNameMap {
    'uc-side-drawer': HTMLUcSideDrawerElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}

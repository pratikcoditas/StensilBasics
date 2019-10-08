import { Component, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'uc-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true
})
export class SideDrawer {
  @State() showContacts = false;
  @Prop({ reflectToAttr: true }) title: string;
  @Prop({ reflectToAttr: true, mutable: true }) open: boolean;

  onCloseDrawer() {
    this.open = false;
  }

  onContentChange(conte: string) {
    this.showContacts = conte === 'contact';
  }

  @Method()
  openSideDrawer () {
    this.open = true;
  }

  closeDrawer() {
    this.open = false;
  }

  render() {
    let mainContent = <slot />;
    if(this.showContacts) {
      mainContent = (
        <div id="contact-information"> 
          <h2>
              Contact information. 
          </h2>
          <p>
              You can reach us using mail or phone.
          </p>
          <ul>
            <li>
              phone number: 798798798
            </li>
            <li>
              Email: asjkdh@akjs.com
            </li>
          </ul>
        </div>
      );
    }
    
    return [
      <div class="backdrop" onClick= {this.closeDrawer.bind(this)}/>,
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <section id="tabs">
          <button class={!this.showContacts ? 'active': ''} onClick={this.onContentChange.bind(this, 'nav')}>Navigation</button>
          <button class={this.showContacts ? 'active': ''} onClick={this.onContentChange.bind(this,'contact')}>Contact</button>
        </section>
        <main>
          {mainContent}
        </main>
      </aside>
    ];
  }
}

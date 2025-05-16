(() => {

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(
      public id: string,
      public type: HtmlType,
    ) { }
  }

  class InputAttributes {
    constructor(
      public value: string,
      public placeholder: string,
    ) {
    }
  }

  class InputEvents {

    constructor() {
    }

    setFocus() { };
    getValue() { };
    isActive() { };
    removeValue() { };
  }


  //? Idea para la nueva clase InputElement

  class InputElement {

    public htmlElment: HtmlElement;
    public inputsAttributes: InputAttributes;
    public inputsEvents: InputEvents;

    constructor(
       value: string, placeholder: string,id: string ) {
      this.htmlElment = new HtmlElement(id, 'input')
      this.inputsAttributes = new InputAttributes(value, placeholder)
      this.inputsEvents = new InputEvents()

    }
  }

  const nameField = new InputElement( 'Fernando', 'Enter first name', 'txtName');

  console.log({ nameField });

})()
(() => {

  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: string) {
      console.log('Product:', { id, name: 'Laptop' })
    }

    saveProduct(product: Product) {
      console.log('Product:', product)
    }
  }

  class Mailer {

    sendMail() {
      console.log('Enviando correo a los clientes');
    }

  }


  class ProductBloc {

    private productService: ProductService
    private mailer: Mailer

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService
      this.mailer = mailer


    }

    loadProduct(id: string) {
      // Realiza un proceso para obtener el producto y retornarlo
      productService.getProduct(id)
    }

    saveProduct(product: Product) {
      productService.saveProduct(product)

    }

    notifyClients() {
      this.mailer.sendMail()
    }



  }



  class CartBloc {
    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log('Agregando al carrito ', productId);
    }
  }


  const notifyClients = new Mailer()
  const productService = new ProductService();
  const productBloc = new ProductBloc(productService,notifyClients);

  const cartBloc = new CartBloc()


  productBloc.loadProduct('10');
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  notifyClients.sendMail();
  cartBloc.addToCart(10);








})();
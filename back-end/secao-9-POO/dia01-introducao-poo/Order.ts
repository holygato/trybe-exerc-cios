import { OrderItem } from './OrderItem';
import { Client } from "./Client";
// Crie uma classe que represente uma order.
// A order deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.

export class Order {
  private _client: Client;
  private _items: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount: number;

  constructor(client: Client, items: OrderItem[], paymentMethod: string, discount: number) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  public get client(): Client {
    return this._client;
  }
  public set client(value: Client) {
    this._client = value;
  }

  public get items(): OrderItem[] {
    return this._items;
  }
  // O pedido precisa ter ao menos um item
  public set items(value: OrderItem[]) {
    if (value.length < 1) {
      throw new Error("O pedido precisa ter ao menos um item.");
    }
    this._items = value;
  }

  public get paymentMethod(): string {
    return this._paymentMethod;
  }
  public set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  public get discount(): | number {
    return this._discount;
  }
  // O desconto deve ser um valor positivo
  public set discount(value: number) {
    if (value < 0) {
      throw new Error("O desconto deve ser um valor positivo.");
    }
    this._discount = value;
  }

  // Crie um método que calcule o valor total do pedido com reduce.
  public total(): number {
    return this._items.reduce((total, item) => total + item.price, 0);
  }

  // Crie um método que calcule o valor total do pedido com o desconto.
  public totalWithDiscount(): number {
    return this.total() - this.total() * this._discount;
  }
}

const client = new Client('João');

const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.total());
console.log('Valor com desconto: ', order.totalWithDiscount());
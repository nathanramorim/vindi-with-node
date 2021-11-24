export interface BillItem {
  product_id: number,
  amount: number
}
export interface Bill {
  customer_id: string;
  payment_method: string;
  due_at: string;
  bill_item: BillItem[]
}

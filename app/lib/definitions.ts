export type Invoice = {
    id: string,
    customerId: string,
    amount: number,
    date: string,
    status: 'pending' | 'paid'
}
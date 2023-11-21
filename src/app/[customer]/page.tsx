import dynamic from 'next/dynamic';

const customers: Record<string, React.ComponentType<any>> = {
  customer1: dynamic(() => import(/* webpackChunkName: "customer1" */'../../customer1')),
  customer2: dynamic(() => import(/* webpackChunkName: "customer2" */'../../customer2'))
};

export default function Page({ params }: { params: { customer: string } }) {
  const CustomerComponent = customers[params.customer];

  return (
    <main>
      {CustomerComponent ? <CustomerComponent /> : 'Customer not found'}
    </main>
  );
}

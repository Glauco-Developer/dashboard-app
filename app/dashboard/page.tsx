import Link from 'next/link';

export default function Dashboard() {
    return (
        <main>
            <Link href='/dashboard/customers'>Customers</Link>
            <Link href='/dashboard/invoices'>Invoices</Link>
        </main>
    )
}
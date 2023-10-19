import Link from 'next/link';

function HomePage() {
    return (
        <div>
            <h1>Welcome to Next.js!</h1>
            <Link href="/items">Go to Items</Link>
        </div>
    );
}

export default HomePage;

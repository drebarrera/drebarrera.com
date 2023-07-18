import Link from 'next/link';

export default function ManifestoPage() {
    return (
        <div>
            <h1>Manifesto</h1>
            <Link href="/admin">Admin</Link><br></br>
            <Link href="https://www.google.com/">Google</Link>
        </div>
    );
}
'use client'; // Zwróć uwagę, że 'use client' musi być na początku pliku w Next.js 13
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation'; // Nowe hooki w Next.js 13

export const AuthWrapper = ({
    children,
   }: Readonly<{
    children: React.ReactNode;
   }>) => {
  const [loading, setLoading] = useState(true); // Zmienna na początkowe ładowanie
  const pathname = usePathname(); // Zamiast useRouter
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('Authenticate');
    
    // Lista stron, które są publiczne (nie wymagają zalogowania)
    const publicPaths = ['/', '/login', '/register'];
    const pathIsPublic = publicPaths.includes(pathname);

    if (!token && !pathIsPublic) {
      // Brak tokenu i próba wejścia na stronę chronioną - przekierowanie na login
      router.push('/login');
    } else if (token && pathIsPublic) {
      // Zalogowany użytkownik nie powinien mieć dostępu do login/register
      router.push('/dashboard');
    }

    setLoading(false); // Ustawiamy loading na false po sprawdzeniu autoryzacji
  }, [pathname, router]);

  if (loading) {
    return <div>Loading...</div>; // Możesz dodać spinner lub loader
  }

  return <>{children}</>;
};

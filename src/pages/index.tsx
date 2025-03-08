import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

export default function Home() {
  const router = useRouter();
  
  // Redirect to installation page
  useEffect(() => {
    router.replace('/installation');
  }, [router]);
  
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Redirecting to documentation...</h1>
          <p className="mt-4">If you are not redirected automatically, please click <a href="/installation" className="text-primary hover:underline">here</a>.</p>
        </div>
      </div>
    </Layout>
  );
}
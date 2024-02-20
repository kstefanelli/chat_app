import { authOptions } from '@/auth';
import { getServerSession } from 'next-auth';
import PricingCard from '@/components/PricingCard';

async function Register() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <div className="py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Register
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Lets handle your Membership,{' '}
              <span className="text-indigo-600 dark:text-indigo-500">
                {session?.user?.name?.split(' ')?.[0]}!
              </span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <PricingCard redirect={false} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;

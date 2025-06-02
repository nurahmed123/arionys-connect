import Link from 'next/link';
import { Features } from '@/components/home/Features';
import { Hero } from '@/components/home/Hero';
import { HowItWorks } from '@/components/home/HowItWorks';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <HowItWorks />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Ready to join our productive community?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start showcasing your skills, learning from others, or finding the perfect talent today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/register"
              className="btn btn-primary px-8 py-3"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="btn bg-white text-gray-600 hover:bg-gray-50 px-8 py-3"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
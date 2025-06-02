export function HowItWorks() {
  const steps = [
    {
      title: 'Create your profile',
      description: 'Sign up and build your professional profile showcasing your skills and experience.',
    },
    {
      title: 'Get verified',
      description: 'Verify your credentials to build trust and unlock additional features.',
    },
    {
      title: 'Join communities',
      description: 'Connect with like-minded professionals in your field of interest.',
    },
    {
      title: 'Start learning or teaching',
      description: 'Take classes or share your knowledge with others through live or recorded sessions.',
    },
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Get started</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How it works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Follow these simple steps to begin your journey with our platform.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-start">
                <div className="rounded-full bg-indigo-600 px-3 py-1 text-sm font-semibold text-white">
                  Step {index + 1}
                </div>
                <dt className="mt-4 font-semibold leading-7 text-gray-900">{step.title}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
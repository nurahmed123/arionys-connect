export function Features() {
  const features = [
    {
      title: 'Professional Profiles',
      description: 'Showcase your skills, experience, and achievements with detailed professional profiles.',
    },
    {
      title: 'Learning Communities',
      description: 'Join specialized communities to share knowledge and collaborate with like-minded professionals.',
    },
    {
      title: 'Live & Recorded Classes',
      description: 'Share your expertise or learn from others through interactive online classes.',
    },
    {
      title: 'Team Formation',
      description: 'Find the perfect teammates for your projects based on skills and experience.',
    },
    {
      title: 'Verified Profiles',
      description: 'Get your profile verified to build trust and credibility in the community.',
    },
    {
      title: 'Private Workspaces',
      description: 'Collaborate with your team in secure, private workspaces with integrated tools.',
    },
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A platform built for productive professionals
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Connect, learn, and grow with features designed to enhance your professional journey.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="font-semibold leading-7 text-gray-900">{feature.title}</dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
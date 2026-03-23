import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Link2, BarChart2, LayoutDashboard, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Link2,
    title: 'Instant Link Shortening',
    description:
      'Turn long, unwieldy URLs into clean, shareable short links in seconds.',
  },
  {
    icon: BarChart2,
    title: 'Click Tracking',
    description:
      'See exactly how many times each of your links has been clicked in real time.',
  },
  {
    icon: LayoutDashboard,
    title: 'Centralized Dashboard',
    description:
      'Manage, edit, and delete all your shortened links from one intuitive dashboard.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    description:
      'Every account is protected by Clerk authentication — no password headaches.',
  },
];

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect('/dashboard');

  return (
    <div className="flex flex-col items-center">
      {/* Hero */}
      <section className="flex flex-col items-center gap-8 px-6 py-24 text-center">
        <h1 className="max-w-2xl text-5xl font-bold tracking-tight">
          Shorten Links.{' '}
          <span className="text-primary">Track Clicks.</span>{' '}
          Share Smarter.
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          A fast, free link shortener that gives you branded short URLs and
          real&#8209;time analytics — all in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <SignUpButton mode="modal">
            <Button size="lg">Get Started Free</Button>
          </SignUpButton>
          <SignInButton mode="modal">
            <Button size="lg" variant="outline">
              Sign In
            </Button>
          </SignInButton>
        </div>
      </section>

      {/* Features */}
      <section className="w-full max-w-5xl px-6 pb-24">
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight">
          Everything you need
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="size-8 text-primary" />
                <CardTitle className="mt-3">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

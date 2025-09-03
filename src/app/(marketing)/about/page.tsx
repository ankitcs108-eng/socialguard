import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const teamMembers = [
  { name: 'Alex Chen', role: 'CEO & Co-Founder', bio: 'Former Data Science Lead at Meta, PhD in Machine Learning from Stanford.', imageUrl: 'https://picsum.photos/400/400?random=1' },
  { name: 'Sarah Rodriguez', role: 'CTO & Co-Founder', bio: 'Ex-Senior Engineer at Twitter, MS Computer Science from MIT.', imageUrl: 'https://picsum.photos/400/400?random=2' },
  { name: 'David Kim', role: 'Head of Product', bio: 'Former Product Manager at LinkedIn, MBA from Wharton.', imageUrl: 'https://picsum.photos/400/400?random=3' },
];

const companyMetrics = [
  { label: 'Founded', value: '2023' },
  { label: 'Users', value: '10,000+' },
  { label: 'Accounts Analyzed', value: '2.1M+' },
  { label: 'Funding', value: '$5M Series A' },
];

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Protecting Digital Trust Since 2023</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Our mission: To create a safer social media environment by providing accessible, accurate, and instant fake account detection.
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">The Problem We Solve</h2>
            <p className="mt-4 text-muted-foreground">
              Social media fraud costs businesses over $1.3 billion annually. Fake accounts, bots, and impersonators undermine trust, waste marketing budgets, and pose security risks. Traditional detection methods are slow, inaccurate, and expensive.
            </p>
            <h2 className="mt-8 text-3xl font-bold tracking-tight">Our Solution</h2>
            <p className="mt-4 text-muted-foreground">
              SocialGuard's AI-powered platform democratizes fake account detection, making advanced fraud prevention accessible to everyone from individual users to large enterprises.
            </p>
          </div>
          <div>
            <Image 
              src="https://picsum.photos/600/400"
              alt="Team collaboration"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              data-ai-hint="team collaboration"
            />
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-center text-3xl font-bold tracking-tight">Our Values</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader><CardTitle>Privacy First</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground">Your data security is our top priority.</p></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Accuracy</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground">Continuous improvement in detection precision.</p></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Accessibility</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground">Making security tools available to everyone.</p></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Transparency</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground">Open about our methods and limitations.</p></CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-center text-3xl font-bold tracking-tight">Meet the Leadership</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="pt-6">
                  <Image 
                    src={member.imageUrl}
                    alt={`Photo of ${member.name}`}
                    width={128}
                    height={128}
                    className="rounded-full mx-auto"
                    data-ai-hint="professional headshot"
                  />
                  <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                  <p className="mt-2 text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-24 bg-primary text-primary-foreground rounded-lg p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {companyMetrics.map(metric => (
                    <div key={metric.label}>
                        <p className="text-4xl font-bold">{metric.value}</p>
                        <p className="mt-2 opacity-80">{metric.label}</p>
                    </div>
                ))}
            </div>
        </section>

      </div>
    </div>
  );
}
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  ShieldCheck,
  Zap,
  Bot,
  BarChart3,
  Globe,
  Lock,
  Scale,
  Cpu,
  Database,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DetectionWidget } from '@/components/detection-widget';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'AI-Powered Detection',
    description:
      'Our machine learning algorithms analyze 127+ data points for real-time behavioral pattern recognition.',
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: 'Detailed Analytics',
    description:
      'Receive a risk score from 0-100 with a full breakdown of suspicious indicators and visual reports.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Lightning Fast',
    description:
      'Get comprehensive results in under 10 seconds with our 99.9% uptime guarantee.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Multi-Platform Support',
    description:
      'We support Instagram, Twitter, Facebook, LinkedIn, and TikTok, with more platforms added monthly.',
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: 'Enterprise Security',
    description:
      'Your data is protected with bank-level encryption. We are GDPR & CCPA compliant with a zero data retention policy.',
  },
  {
    icon: <Scale className="h-8 w-8 text-primary" />,
    title: 'Scalable Solutions',
    description:
      'From individual to enterprise plans, we offer API integration and custom solutions for large organizations.',
  },
];

const analysisIndicators = [
  { category: 'Profile Authentication', indicators: 'Verification status, creation date, profile completeness', weight: 'High' },
  { category: 'Activity Patterns', indicators: 'Posting frequency, engagement rates, follower growth', weight: 'High' },
  { category: 'Content Analysis', indicators: 'Image authenticity, text patterns, language consistency', weight: 'Medium' },
  { category: 'Network Analysis', indicators: 'Follower quality, mutual connections, interaction patterns', weight: 'Medium' },
  { category: 'Technical Markers', indicators: 'Device fingerprints, location consistency, automation signs', weight: 'High' },
];

const useCases = [
  {
    title: 'Individual Users',
    items: ['Online Dating Safety', 'Influencer Vetting', 'Social Media Security'],
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: 'Businesses & Brands',
    items: ['Influencer Marketing', 'Brand Protection', 'HR Screening'],
    icon: <Cpu className="h-6 w-6" />,
  },
  {
    title: 'Enterprise Solutions',
    items: ['Financial Services (KYC)', 'Media Companies', 'Security Agencies'],
    icon: <Database className="h-6 w-6" />,
  },
];

const pricingTiers = [
    { name: 'Free', price: '$0', checks: '10', platforms: '3', batch: false, reports: 'Basic', api: false, support: false },
    { name: 'Professional', price: '$29/mo', checks: '1,000', platforms: 'All 5+', batch: true, reports: 'Advanced', api: true, support: true },
    { name: 'Enterprise', price: 'Custom', checks: 'Unlimited', platforms: 'All + Custom', batch: true, reports: 'Custom', api: true, support: true },
];

const testimonials = [
  { quote: "SocialGuard helped us identify 85% fake followers in an influencer's account, saving us $50,000 in marketing budget.", author: 'Sarah Chen', title: 'Marketing Director, TechCorp' },
  { quote: "As a journalist, I use SocialGuard daily to verify sources. It's become indispensable for fact-checking.", author: 'Mark Rodriguez', title: 'Senior Reporter, NewsDaily' },
  { quote: "The bulk checking feature saved us hundreds of hours in our influencer outreach campaign.", author: 'Lisa Park', title: 'Social Media Manager, BrandBoost' },
];

const stats = [
  { value: '2.1M+', label: 'Accounts Analyzed' },
  { value: '99.7%', label: 'Accuracy Rate' },
  { value: '10,000+', label: 'Active Users' },
  { value: '<10 sec', label: 'Average Detection Time' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-20 sm:py-32">
            <div className="absolute inset-0 bg-grid-slate-200/[0.4] dark:bg-grid-slate-700/[0.4] [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
            <div className="container mx-auto px-4 text-center relative">
                <ShieldCheck className="mx-auto h-16 w-16 text-primary" />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mt-4">
                    Stop Fake Accounts Before They Stop You
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    SocialGuard's AI-powered technology detects fake social media accounts in seconds, protecting your brand and personal safety.
                </p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
                    <div className="flex items-center gap-4">
                        <CheckCircle className="h-8 w-8 text-green-500 shrink-0" />
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">99.7% Accuracy Rate</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Advanced AI detection algorithms</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Zap className="h-8 w-8 text-yellow-500 shrink-0" />
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">Instant Results</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Get verification in under 10 seconds</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <ShieldCheck className="h-8 w-8 text-blue-500 shrink-0" />
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">Brand Protection</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Shield against impersonators</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 max-w-xl mx-auto">
                    <DetectionWidget />
                </div>
                 <div className="mt-4 flex justify-center gap-4">
                    <Button size="lg" asChild>
                        <Link href="#pricing">Get Started</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="#features">Learn More</Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose SocialGuard?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our platform provides unmatched accuracy, speed, and security.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {feature.icon}
                      <CardTitle>{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Detect Fake Accounts in 3 Simple Steps
              </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 text-center">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground">
                        <span className="text-2xl font-bold">1</span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">Input Details</h3>
                    <p className="mt-2 text-muted-foreground">Paste a username, profile URL, or upload a CSV file for bulk checks.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground">
                        <span className="text-2xl font-bold">2</span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">AI Analysis</h3>
                    <p className="mt-2 text-muted-foreground">Our algorithms analyze profile data, activity, and content authenticity.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground">
                        <span className="text-2xl font-bold">3</span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">Get Report</h3>
                    <p className="mt-2 text-muted-foreground">Receive a detailed risk score, flagged indicators, and actionable insights.</p>
                </div>
            </div>
          </div>
        </section>

        {/* Analysis Indicators Section */}
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What We Analyze
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We look at a comprehensive set of indicators to determine account authenticity.
              </p>
            </div>
            <Card className="mt-16">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Indicators</TableHead>
                    <TableHead>Weight</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {analysisIndicators.map((item) => (
                    <TableRow key={item.category}>
                      <TableCell className="font-medium">{item.category}</TableCell>
                      <TableCell>{item.indicators}</TableCell>
                      <TableCell>
                        <Badge variant={item.weight === 'High' ? 'default' : 'secondary'}>{item.weight}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Who Uses SocialGuard?
              </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {useCases.map((useCase) => (
                <Card key={useCase.title}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {useCase.icon}
                      </div>
                      <CardTitle>{useCase.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      {useCase.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Choose Your Protection Level</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Simple, transparent pricing for everyone.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {pricingTiers.map((tier) => (
                        <Card key={tier.name} className={`flex flex-col ${tier.name === 'Professional' ? 'border-primary ring-2 ring-primary' : ''}`}>
                            <CardHeader>
                                <CardTitle>{tier.name}</CardTitle>
                                <CardDescription>
                                    <span className="text-4xl font-bold">{tier.price}</span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> <strong>{tier.checks}</strong> Monthly Checks</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> <strong>{tier.platforms}</strong> Platforms</li>
                                    <li className={`flex items-center gap-2 ${!tier.batch && tier.name !== 'Enterprise' ? 'text-muted-foreground' : ''}`}>{tier.batch ? <CheckCircle className="h-5 w-5 text-green-500" /> : '❌'} Batch Processing</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> {tier.reports} Reports</li>
                                    <li className={`flex items-center gap-2 ${!tier.api && tier.name !== 'Enterprise' ? 'text-muted-foreground' : ''}`}>{tier.api ? <CheckCircle className="h-5 w-5 text-green-500" /> : '❌'} API Access</li>
                                    <li className={`flex items-center gap-2 ${!tier.support && tier.name !== 'Enterprise' ? 'text-muted-foreground' : ''}`}>{tier.support ? <CheckCircle className="h-5 w-5 text-green-500" /> : '❌'} Priority Support</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant={tier.name === 'Professional' ? 'default' : 'outline'} asChild>
                                    <Link href={tier.name === 'Enterprise' ? '/contact' : '/signup'}>
                                      {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="mt-8 text-center">
                  <Button variant="link" asChild>
                    <Link href="/pricing">View Full Pricing Details</Link>
                  </Button>
                </div>
            </div>
        </section>

        {/* Social Proof & Stats Section */}
        <section className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by 10,000+ Users Worldwide</h2>
                </div>
                <div className="mt-12 flex justify-center items-center gap-8 flex-wrap grayscale opacity-60">
                    <span className="text-lg font-semibold">TechCorp Inc.</span>
                    <span className="text-lg font-semibold">Digital Marketing Pro</span>
                    <span className="text-lg font-semibold">SecureBank</span>
                    <span className="text-lg font-semibold">MediaMax</span>
                    <span className="text-lg font-semibold">StartupHub</span>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index}>
                            <CardContent className="pt-6">
                                <blockquote className="text-lg">"{testimonial.quote}"</blockquote>
                            </CardContent>
                             <CardFooter>
                                <div className="font-semibold">{testimonial.author}</div>
                                <div className="text-sm text-muted-foreground ml-2">, {testimonial.title}</div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                 <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-bold text-primary">{stat.value}</p>
                            <p className="mt-2 text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Protect Your Digital Presence?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Join thousands of users who trust SocialGuard to keep their social media safe and authentic.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">Start Free Detection</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
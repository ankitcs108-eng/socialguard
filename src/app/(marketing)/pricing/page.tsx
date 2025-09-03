import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle } from 'lucide-react';

const comparisonFeatures = [
  { feature: 'Monthly Account Checks', free: '10', pro: '1,000', enterprise: 'Unlimited' },
  { feature: 'Platform Access', free: '3 platforms', pro: 'All 5 platforms', enterprise: 'All + Future releases' },
  { feature: 'Risk Score Detail', free: 'Basic (0-100)', pro: 'Detailed breakdown', enterprise: 'Full analysis + Custom metrics' },
  { feature: 'Historical Data', free: '7 days', pro: '12 months', enterprise: 'Unlimited' },
  { feature: 'Bulk Processing', free: '❌', pro: '✅ Up to 100', enterprise: '✅ Unlimited' },
  { feature: 'Export Reports', free: '❌', pro: '✅ PDF/Excel', enterprise: '✅ All formats + API' },
  { feature: 'API Access', free: '❌', pro: '✅ 1,000 calls/month', enterprise: '✅ Unlimited' },
  { feature: 'Customer Support', free: 'Community forum', pro: 'Email support', enterprise: 'Dedicated account manager' },
  { feature: 'Custom Integrations', free: '❌', pro: '❌', enterprise: '✅ Available' },
  { feature: 'White-label Solution', free: '❌', pro: '❌', enterprise: '✅ Available' },
  { feature: 'SLA Guarantee', free: '❌', pro: '99.9% uptime', enterprise: '99.99% + Custom SLA' },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Simple, Transparent Pricing</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Choose the perfect plan to protect your digital presence.
        </p>
      </header>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription><span className="text-4xl font-bold">$0</span></CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p>For individuals and small-scale use.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild variant="outline">
              <Link href="/signup">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col border-primary ring-2 ring-primary">
          <CardHeader>
            <CardTitle>Professional</CardTitle>
            <CardDescription><span className="text-4xl font-bold">$29</span> / month</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p>For professionals and businesses requiring more power.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/signup">Choose Professional</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription><span className="text-4xl font-bold">Custom</span></CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p>For large organizations with specific needs.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild variant="outline">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <section className="mt-20">
        <h2 className="text-center text-3xl font-bold tracking-tight">Full Feature Comparison</h2>
        <div className="mt-8 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Feature</TableHead>
                <TableHead className="text-center">Free</TableHead>
                <TableHead className="text-center">Professional</TableHead>
                <TableHead className="text-center">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonFeatures.map((item) => (
                <TableRow key={item.feature}>
                  <TableCell className="font-medium">{item.feature}</TableCell>
                  <TableCell className="text-center">{item.free}</TableCell>
                  <TableCell className="text-center">{item.pro}</TableCell>
                  <TableCell className="text-center">{item.enterprise}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Enterprise Features</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Advanced customization and service level agreements for our largest customers.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg">Custom Detection Rules</h3>
                <p className="mt-2 text-muted-foreground">Train our AI on your specific use cases for enhanced accuracy.</p>
            </div>
             <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg">White-label Dashboard</h3>
                <p className="mt-2 text-muted-foreground">A branded interface for your organization and clients.</p>
            </div>
             <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg">Dedicated Infrastructure</h3>
                <p className="mt-2 text-muted-foreground">An isolated and secure processing environment for your data.</p>
            </div>
        </div>
      </section>
    </div>
  );
}
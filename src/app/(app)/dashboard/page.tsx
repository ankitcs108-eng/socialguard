'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const chartData = [
  { month: 'January', checks: 186 },
  { month: 'February', checks: 305 },
  { month: 'March', checks: 237 },
  { month: 'April', checks: 73 },
  { month: 'May', checks: 209 },
  { month: 'June', checks: 214 },
];

const chartConfig = {
  checks: {
    label: 'Accounts Checked',
    color: 'hsl(var(--chart-1))',
  },
};

const recentDetections = [
  { date: 'Today 3:42 PM', account: '@suspicious_user', platform: 'Instagram', score: 89, status: 'High Risk' },
  { date: 'Today 2:15 PM', account: '@real_person', platform: 'Twitter', score: 15, status: 'Low Risk' },
  { date: 'Yesterday 4:22 PM', account: '@fake_influencer', platform: 'TikTok', score: 94, status: 'Critical' },
  { date: 'Yesterday 1:05 PM', account: '@business_account', platform: 'LinkedIn', score: 8, status: 'Low Risk' },
];

const getStatusVariant = (status: string) => {
    switch (status) {
        case 'High Risk': return 'destructive';
        case 'Critical': return 'destructive';
        default: return 'secondary';
    }
}

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Welcome back, User!</h1>
        <div className="flex gap-2">
            <Button>Detect New Account</Button>
            <Button variant="outline">View Full History</Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Accounts Checked</CardTitle>
            <CardDescription>This month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">47</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fake Accounts Found</CardTitle>
            <CardDescription>25.5% of total checks</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Credits Remaining</CardTitle>
            <CardDescription>Professional Plan</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">953/1000</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Success Rate</CardTitle>
            <CardDescription>Model accuracy</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">99.7%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
         <Card>
            <CardHeader>
                <CardTitle>Monthly Activity</CardTitle>
                <CardDescription>Volume of accounts checked over the last 6 months.</CardDescription>
            </CardHeader>
            <CardContent>
                 <ChartContainer config={chartConfig} className="w-full h-[300px]">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="checks" fill="var(--color-checks)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
         </Card>
         <Card>
            <CardHeader>
                <CardTitle>Recent Detections</CardTitle>
                <CardDescription>Your latest account verifications.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Account</TableHead>
                            <TableHead>Platform</TableHead>
                            <TableHead>Score</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recentDetections.map(d => (
                            <TableRow key={d.account}>
                                <TableCell className="font-medium">{d.account}</TableCell>
                                <TableCell>{d.platform}</TableCell>
                                <TableCell>{d.score}</TableCell>
                                <TableCell><Badge variant={getStatusVariant(d.status)}>{d.status}</Badge></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
         </Card>
      </div>
    </>
  );
}

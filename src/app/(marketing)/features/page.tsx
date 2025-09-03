import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle, Bot, BarChart3, Zap, Lock } from 'lucide-react';

const accuracyData = [
  { platform: 'Instagram', accuracy: '99.8%', falsePositives: '0.2%', time: '8 seconds' },
  { platform: 'Twitter', accuracy: '99.6%', falsePositives: '0.4%', time: '6 seconds' },
  { platform: 'Facebook', accuracy: '99.5%', falsePositives: '0.5%', time: '9 seconds' },
  { platform: 'LinkedIn', accuracy: '99.9%', falsePositives: '0.1%', time: '7 seconds' },
  { platform: 'TikTok', accuracy: '99.4%', falsePositives: '0.6%', time: '11 seconds' },
];

const riskLevels = [
  { level: 'Low Risk', score: '0-25', description: 'Highly likely authentic account', action: 'Safe to engage', color: 'text-green-500' },
  { level: 'Medium Risk', score: '26-60', description: 'Some suspicious indicators present', action: 'Exercise caution', color: 'text-yellow-500' },
  { level: 'High Risk', score: '61-85', description: 'Multiple red flags detected', action: 'Proceed with extreme caution', color: 'text-orange-500' },
  { level: 'Critical Risk', score: '86-100', description: 'Almost certainly fake/malicious', action: 'Avoid engagement', color: 'text-red-500' },
];

const privacyFeatures = [
    { feature: 'Zero Data Retention', description: 'No permanent storage of analyzed profiles', active: true },
    { feature: 'Encrypted Processing', description: 'All data encrypted during analysis', active: true },
    { feature: 'Anonymous Analysis', description: 'Option to hide profile from history', active: true },
    { feature: 'GDPR Compliance', description: 'Full European data protection compliance', active: true },
    { feature: 'Audit Logs', description: 'Complete tracking of all activities', active: true },
]

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Advanced AI Detection Features</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Comprehensive social media account verification powered by cutting-edge artificial intelligence.
        </p>
      </header>

      <div className="mt-20 space-y-20">
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Bot className="h-8 w-8 text-primary" />
                AI Detection Engine
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Trained on 50+ million verified and fake accounts, our engine analyzes 127+ unique data points per profile for real-time behavioral pattern recognition.
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Platform</TableHead>
                    <TableHead>Accuracy Rate</TableHead>
                    <TableHead>False Positives</TableHead>
                    <TableHead>Processing Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {accuracyData.map((item) => (
                    <TableRow key={item.platform}>
                      <TableCell className="font-medium">{item.platform}</TableCell>
                      <TableCell>{item.accuracy}</TableCell>
                      <TableCell>{item.falsePositives}</TableCell>
                      <TableCell>{item.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
        
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <BarChart3 className="h-8 w-8 text-primary" />
                Risk Scoring System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Our comprehensive risk assessment provides a clear score and recommended action.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {riskLevels.map(risk => (
                    <div key={risk.level} className="border rounded-lg p-4">
                        <h3 className={`font-bold text-lg ${risk.color}`}>
                            {risk.level}
                        </h3>
                        <p className="font-mono text-sm text-muted-foreground">Score: {risk.score}</p>
                        <p className="mt-2 text-sm">{risk.description}</p>
                        <p className="mt-2 text-xs font-semibold text-primary">Action: {risk.action}</p>
                    </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                        <Lock className="h-8 w-8 text-primary" />
                        Security & Compliance
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-6">
                        We prioritize your data security with AES-256 end-to-end encryption, GDPR & CCPA compliance, and a zero permanent storage policy.
                    </p>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Feature</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {privacyFeatures.map(item => (
                                <TableRow key={item.feature}>
                                    <TableCell className="font-medium">{item.feature}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>
                                      {item.active ? <CheckCircle className="h-5 w-5 text-green-500" /> : '⏳'}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </section>

      </div>
    </div>
  );
}
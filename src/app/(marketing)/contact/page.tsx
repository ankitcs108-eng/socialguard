import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, LifeBuoy, FileText, Bot, Users } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Get in Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          We're here to help. Contact us for sales, support, or any general inquiries.
        </p>
      </header>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Contact Information</h2>
          <div className="mt-6 space-y-4 text-lg">
            <p className="flex items-center gap-3"><MapPin className="h-6 w-6 text-primary" /> 123 Tech Street, San Francisco, CA 94105</p>
            <p className="flex items-center gap-3"><Phone className="h-6 w-6 text-primary" /> +1 (555) 123-SHIELD</p>
            <p className="flex items-center gap-3"><Mail className="h-6 w-6 text-primary" /> hello@socialguard.com</p>
          </div>

          <h3 className="mt-12 text-2xl font-bold tracking-tight">Support Resources</h3>
           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="#" className="flex items-center gap-3 p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                  <LifeBuoy className="h-6 w-6 text-primary" />
                  <span>Knowledge Base</span>
              </a>
               <a href="#" className="flex items-center gap-3 p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                  <FileText className="h-6 w-6 text-primary" />
                  <span>API Documentation</span>
              </a>
               <a href="#" className="flex items-center gap-3 p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                  <Bot className="h-6 w-6 text-primary" />
                  <span>Status Page</span>
              </a>
               <a href="#" className="flex items-center gap-3 p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                  <span>Community Forum</span>
              </a>
           </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>
                <Input id="company" placeholder="Your Company" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                 <Select>
                    <SelectTrigger id="subject">
                        <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="press">Press</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                    </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
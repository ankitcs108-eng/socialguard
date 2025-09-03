'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function DetectionWidget() {
  const [identifier, setIdentifier] = useState('');
  const [platform, setPlatform] = useState('instagram');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (identifier.trim()) {
      // In a real app, you would check authentication status here.
      // For this scaffold, we redirect directly to the detection page.
      router.push(`/detect?platform=${platform}&accountIdentifier=${encodeURIComponent(identifier)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full rounded-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-4 border shadow-lg">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="text"
          placeholder="Enter username or profile URL"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="flex-grow"
          required
        />
        <Select value={platform} onValueChange={setPlatform}>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="twitter">Twitter</SelectItem>
            <SelectItem value="facebook">Facebook</SelectItem>
            <SelectItem value="linkedin">LinkedIn</SelectItem>
            <SelectItem value="tiktok">TikTok</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit" className="w-full sm:w-auto">
          Detect Account
        </Button>
      </div>
    </form>
  );
}
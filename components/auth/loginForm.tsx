import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MailIcon, KeyIcon } from 'lucide-react';

export function loginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="over-flow:hidden">
        <CardContent>
          <form className="flex">
            <div>
              <Label htmlFor="email">
                {' '}
                <MailIcon />{' '}
              </Label>
              <Input
                type="text"
                name="email"
                placeholder="Enter Your Email Adress"
              />
            </div>
            <div>
              <Label htmlFor="password">
                <KeyIcon />
              </Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
            </div>
            <Button type="submit"> Login </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

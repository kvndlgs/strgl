import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import {
  Tabs, 
  TabsTrigger,
  TabsList
} from '@/components/ui/tabs'
import { Dice2, Medal, Gift, Headphones } from 'lucide-react';

const items = [
  {
    id: 0,
    href: '/',
    title: 'Games',
  },
];

export function MainSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Tabs defaultValue='casino'>
         <TabsList>
           <TabsTrigger value='casino'>
               Casino
             </TabsTrigger>
             <TabsTrigger value='poker'>
               Poker
             </TabsTrigger>
           </TabsList>
          </Tabs>
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarMenuButton>
          <Dice2 /> Games
        </SidebarMenuButton>
        <SidebarMenuButton>
          <Gift /> Promotions
        </SidebarMenuButton>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton>
          <Headphones /> Live Support
          </SidebarMenuButton>
        </SidebarFooter>
    </Sidebar>
  );
}

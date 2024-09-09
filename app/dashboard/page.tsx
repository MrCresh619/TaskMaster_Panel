'use client';
import { useIsClient } from '@/app/utils/hooks/isClient.hook';

export default function Dashboard() {
 const isClient = useIsClient();
 return isClient ? <div>Dashboard</div> : <div>LOADING...</div>;
}

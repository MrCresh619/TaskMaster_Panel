'use client';
import { useIsClient } from '@/app/utils/hooks/isClient.hook';

export default function Statistics() {
 const isClient = useIsClient();
 return isClient ? <div>STATISTICS</div> : <div>LOADING...</div>;
}

'use client';
import { useIsClient } from '@/app/utils/hooks/isClient.hook';

export default function BackLog() {
 const isClient = useIsClient();
 return isClient ? <div>BackLog</div> : <div>LOADING...</div>;
}

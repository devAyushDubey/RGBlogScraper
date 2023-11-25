import Image from 'next/image'
import styles from './page.module.css'
import dynamic from 'next/dynamic';
import RootLayout from './layout';
import NestedList from '../component/lists'
const DynamicActionbar = dynamic(() => import('../component/actionbar'), { ssr: false });


export default function Home() {
  return (
    <div>
      <DynamicActionbar/>
      <NestedList/>
    </div>
    
    
    
  )
}

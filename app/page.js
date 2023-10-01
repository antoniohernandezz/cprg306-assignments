import Image from 'next/image'
import StudentInfo from './StudentInfo';
import Link from 'next/link';



export default function Home() {

  const Styles = { 
    backgroundColor: 'rgb(250 ,204 ,21)',
    
  }
  return (
    <main style = {Styles} className= "flex min-h-screen flex-col items-center justify-between p-24"> 
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <Link href="/week2">Week 2</Link> 
      <Link href="/week3">Week 3</Link>
      <Link href="/week4">Week 4</Link>

    </main>
  );
}

// import AddCompanyButton from './components/add-company-button';
import Link from 'next/link';
// import SidebarItem from './components/sidebar-item';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1 className="py-2.5 px-5  text-xl text-gray-800 mb-5">Home Page</h1>
      <ul>
        <Link
          className="py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded"
          href="/companies"
        >
          Companies
        </Link>
      </ul>
      <Image
        src="/images/hero.jpg"
        width={1000}
        height={760}
        className=""
        alt="Hero of the dashboard project"
      />
      {/* <AddCompanyButton /> */}
    </main>
  );
}

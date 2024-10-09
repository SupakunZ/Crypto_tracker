import { MenuPanels } from '@/components/MenuPanels';
import { MenuTabs } from '@/components/MenuTabs'
import { TabGroup } from '@headlessui/react'

export default function Home() {
  return (
    <main className="w-full max-w-4xl mx-auto sm:px-0">
      <h1 className="mb-4 text-[45px] text-white font-semibold text-center">
        Crypto Tracker
      </h1>
      <section className="space-y-4 mb-4">
        <TabGroup defaultIndex={0}> {/*default หน้าที่แสดง*/}
          <MenuTabs />
          <MenuPanels />
        </TabGroup>
      </section>
    </main>
  );
}

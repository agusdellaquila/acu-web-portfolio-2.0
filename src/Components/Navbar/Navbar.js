import "./Navbar.css"
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
  pages: [
    { name: 'Dashboard', href: '/'},
    { name: 'Projects', href: '/projects'}
  ],
  categories: [
    {
      id: 'Personal',
      name: 'Personal',
      sections: [
        {
          id: 'games',
          name: 'Gaming',
          items: [
            { name: 'My proudest achievements', href: '/games/#games-achievements' },
            { name: 'Games that made me who I am', href: '/games/#games-favourites' },
          ],
        },
        {
          id: 'movies',
          name: 'Movies / Series',
          items: [
            { name: 'My favourite Movies', href: '/movies' },
            { name: 'My favourite Series', href: '/movies' },
          ],
        },
        {
          id: 'gallery',
          name: 'GALL·E·RY',
          items: [
            { name: 'My AI generated art gallery', href: '/AI-gallery' },
          ],
        }
      ],
    },
  ]
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ({switchTheme}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-10 theme-bg">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="bg-white relative flex max-w-xs flex-col overflow-y-auto pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <div className="space-y-6 border-t py-4 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="theme-text-secondary flex-1 whitespace-nowrap py-4 px-1 text-base font-semibold underline">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
                
                <div className="border-b border-gray-300"></div>
                <Tab.Group as="div" className="">
                  <div className="flex">
                    <Tab.List className="px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'theme-text-secondary' : 'border-transparent',
                              'flex-1 whitespace-nowrap pt-4 px-1 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                      <div className="border-b border-gray-100"></div>
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="px-4 pb-8 ml-1">
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-600 pt-4">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-1 flex flex-col font-normal space-y-2"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a href={item.href} className="-m-2 block p-2">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="border-t border-gray-200 py-6 px-4 ml-1">
                  <a href="https://pbs.twimg.com/media/ExHxTlFWEAEmhTd.jpg" target="blank" className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png?20120912082242"
                      alt="Argentina"
                      className="block h-auto w-7 flex-shrink-0"
                    />
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top" className="mx-auto navwidth px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="navbar flex h-16 items-center">
              <button
                type="button"
                className="rounded-md p-2 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-12 w-auto ml-2 sm-hide"
                    src="https://agusdellaquila.github.io/acu-web-portfolio/img/animoji/animoji_peace.png"
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium"
                    >
                      {page.name}
                    </a>
                  ))}

                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'text-indigo-500'
                                  : 'border-transparent',
                                'relative z-10 -mb-px flex items-center pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              <div className="absolute inset-0 top-1/2 theme-bg shadow" aria-hidden="true" />

                              <div className="relative theme-bg">
                                <div className="mx-auto theme-container max-w-7xl px-8">
                                  <div className="grid grid gap-y-10 gap-x-8 py-8">
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-0 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium theme-color-accent">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className="hover:text-indigo-500">
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className='checkbox m-12'>
                  <input id="toggle" type="checkbox" onClick={switchTheme}/>
                  <label htmlFor ="toggle" className='switch'/>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="https://pbs.twimg.com/media/ExHxTlFWEAEmhTd.jpg" target="blank" className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png?20120912082242"
                      alt="Argentina"
                      className="block h-auto w-7 flex-shrink-0"
                    />
                  </a>
                </div>
                
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full text-sm">
                      <span className="sr-only">Open user menu</span>
                      <img
                      className="h-10 w-10 rounded-full"
                      src="/media/me/me.png"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                  <Menu.Items className="theme-bg absolute right-0 mt-10 w-48 origin-top-right rounded-md py-1 shadow-lg">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'theme-bg-alt' : '', 'theme-text-primary block px-4 py-2 text-sm')}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'theme-bg-alt' : '', 'theme-text-primary block px-4 py-2 text-sm')}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
              </Menu>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
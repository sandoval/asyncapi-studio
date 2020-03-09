import Head from 'next/head'
import { FaSearch } from 'react-icons/fa'
import Topbar from './Topbar'
import CreateButton from './CreateButton'
import FilterProjectsButton from './FilterProjectsButton'
import FilterOrganizationsButton from './FilterOrganizationsButton'

export default function DirectoryLayout ({ children, notLoggedIn = false, page, projects, selectedProject, orgs, selectedOrg }) {
  const renderNotLoggedIn = () => {
    return (
      <p>You're not logged in.</p>
    )
  }

  return (
    <>
      <Head>
        <style>{`
          html, body, #__next {
            height: 100%;
          }
        `}</style>
      </Head>
      <div className="flex flex-col">
        <header>
          <div className="bg-gray-800">
            <Topbar active={page} />
            { !notLoggedIn && (
              <>
                <div className="mt-8">
                  <div className="pb-4 px-4 sm:px-6 lg:px-8">
                    <div className="flex w-full bg-white rounded-lg shadow px-2 py-3 sm:px-3">
                      <FaSearch className="mr-4 text-2xl text-gray-500" />
                      <input type="search" placeholder="Search AsyncAPI files..." className="flex-1" />
                    </div>
                  </div>
                </div>

                <div className="px-4 sm:px-6 lg:px-8 pb-3">
                  <nav className="flex flex-row justify-end">
                    <FilterOrganizationsButton orgs={orgs} selected={selectedOrg} />
                    <FilterProjectsButton projects={projects} selected={selectedProject} />
                    <CreateButton />
                  </nav>
                </div>
              </>
            )}
          </div>
        </header>
        <main className="flex flex-col overflow-auto justify-start py-8 px-4 sm:px-6 lg:px-8">
          {notLoggedIn ? renderNotLoggedIn() : children}
        </main>
      </div>
    </>
  )
}

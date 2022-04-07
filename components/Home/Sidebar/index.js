import { logOut } from 'server/auth'
import { Button } from 'components/Button'
import SignOutIcon from 'icons/SignOutIcon'
import styles from './styles'
import { NavLink } from 'components/NavLink'
import HomeIcon from 'icons/Home'
import ChatIcon from 'icons/ChatIcon'
import CalendarIcon from 'icons/CalendarIcon'

export const Sidebar = () => {
  return (
    <>
      <aside>
        <header>
          <h1>MyOrganizer</h1>
        </header>

        <nav>
          <div className='nav-link-wrapper'>
            <HomeIcon />
            <NavLink
              href={'/home'}
              text='Home'
            />
          </div>

          <div className='nav-link-wrapper'>
            <ChatIcon />
            <NavLink
              href={'/chat'}
              text='Chat'
            />
          </div>

          <div className='nav-link-wrapper'>
            <CalendarIcon />
            <NavLink
              href={'/calendar'}
              text='Calendar'
            />
          </div>
        </nav>

        <footer>
          <Button onClick={logOut} color='red'>
            <SignOutIcon />
            <h2>Sign out</h2>
          </Button>
        </footer>
      </aside>

      <style jsx>{styles}</style>
    </>

  )
}

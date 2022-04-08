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
        </footer>
      </aside>

      <style jsx>{styles}</style>
    </>

  )
}

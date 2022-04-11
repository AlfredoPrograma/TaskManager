import { PersonalDataSection } from './PersonalDataSection'
import { AccessDataSection } from './AccessDataSection'
import { AvatarSection } from './AvatarSection'

export const formSections = [
  {
    title: 'Personal data',
    component: <PersonalDataSection />
  },

  {
    title: 'Access data',
    component: <AccessDataSection />
  },

  {
    title: 'Avatar',
    component: <AvatarSection />
  }
]

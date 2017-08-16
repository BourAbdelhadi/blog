import React from 'react'
import { Route } from 'react-router-dom'

import { guideline } from '../utils/getContent'
import SidebarNav from '@/components/SidebarNav'
import Md2React from '@/components/Md2React'

export default function Guideline({ match } = {}) {
  const sidebar = guideline.map(item => ({
    path: `${match.url}/${item.name}`,
    text: item.name,
    content: item.content,
  }))

  return (
    <div>
      <SidebarNav sidebar={sidebar} />
      <div>
        {sidebar.map((item, i) =>
          <Route
            key={i}
            path={item.path}
            render={() => <Md2React content={item.content} />}
          />
        )}
      </div>
    </div>
  )
}

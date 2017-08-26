import React from 'react'
import AppHeader from '@/components/layout/AppHeader'
import PropTypes from 'prop-types'

export default function Home(props) {
  return (
    <div>
      <AppHeader title={props.page.title} />
    </div>
  )
}

Home.propTypes = {
  page: PropTypes.object.isRequired,
}

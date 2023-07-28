import React from 'react'
import './App.css'

import { Portal } from './components/Portal'
import { Viewer } from './components/Viewer'

import { initBuerli } from '../../buerligons/src/initBuerli'
initBuerli()

export const App: React.FC = () => {
  const [file, setFile] = React.useState<string>('')

  return (
    <div className="main">
      <div className="header">
        <a onClick={() => setFile('http://127.0.0.1:8085/as1_ac_214.stp')}>as1_ac_214.stp</a>
        <a onClick={() => setFile('http://127.0.0.1:8085/clamp.stp')}>clamp.stp</a>
      </div>
      <Portal show={Boolean(file)} contentClassName="container" onMissedClicked={() => setFile('')}>
        <Viewer file={file} />
      </Portal>
    </div>
  )
}

export default App

import React from 'react'
import './App.css'

import { Buerligons } from '../../buerligons/src/components/Buerligons'
import { initBuerli } from '../../buerligons/src/initBuerli'

import { ccAPI } from '@buerli.io/classcad'
import { DrawingID, api } from '@buerli.io/core'

initBuerli()

function App() {
  const [drId, setDrId] = React.useState<DrawingID | null>('')

  const load = React.useCallback(
    (file: string) => {
      const run = async () => {
        if (drId) {
          api.getState().api.removeDrawing(drId)
        }
        const id = await ccAPI.base.createCCDrawing()
        await ccAPI.baseModeler.loadFromUrl(id!, file, 'stp', true)
        setDrId(id)
      }
      run()
    },
    [setDrId, drId],
  )

  return (
    <div className="main">
      <div className="header">
        <a onClick={() => load('http://127.0.0.1:8085/as1_ac_214.stp')}>as1_ac_214.stp</a>
        <a onClick={() => load('http://127.0.0.1:8085/clamp.stp')}>clamp.stp</a>
      </div>
      {drId && (
        <div className="container">
          <Buerligons />
        </div>
      )}
    </div>
  )
}

export default App

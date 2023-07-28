import React from 'react'

import { ccAPI } from '@buerli.io/classcad'
import { DrawingID, api } from '@buerli.io/core'

import { Buerligons } from '../../../buerligons/src/components/Buerligons'

export const Viewer: React.FC<{ file: string }> = props => {
  const { file } = props
  const [drId, setDrId] = React.useState<DrawingID>('')

  React.useEffect(() => {
    const run = async () => {
      const id = await ccAPI.base.createCCDrawing()
      if (id) {
        await ccAPI.baseModeler.loadFromUrl(id!, file, 'stp', true)
        setDrId(id)
      }
    }
    run()
  }, [file])

  React.useEffect(() => {
    return () => {
      if (drId) {
        api.getState().api.removeDrawing(drId)
      }
    }
  }, [drId])

  return drId ? <Buerligons key={file} /> : <div></div>
}

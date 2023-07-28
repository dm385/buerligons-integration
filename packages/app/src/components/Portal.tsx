import clsx from 'clsx'
import React, { CSSProperties } from 'react'
import ReactDOM from 'react-dom'
import s from './Portal.module.css'

export const Portal: React.FC<{ show?: boolean; contentClassName?: string; contentStyle?: CSSProperties; children?: React.ReactNode; onMissedClicked?: () => void }> = props => {
  const { show = true, contentClassName, contentStyle, children, onMissedClicked } = props
  return ReactDOM.createPortal(
    <div className={clsx(s['portal'], s[show ? 'block' : 'none'], show && s['visible1'])} onClick={onMissedClicked}>
      <section style={contentStyle} className={`${clsx(s['portal-content'], show && s['visible2'])} ${contentClassName}`} onClick={e => e.stopPropagation()}>
        {show ? children : null}
      </section>
    </div>,
    document.body,
  )
}

import * as preact from 'preact'
import { JSXInternal } from 'preact/src/jsx'

declare module 'preact/src/jsx' {
	namespace JSXInternal {
		interface IntrinsicElements {
			["py-script"]: Partial<HTMLElement & { children: any }>
		}
	}
}
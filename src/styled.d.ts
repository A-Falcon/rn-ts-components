import 'styled-components/native'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      darkText: string
      lightText: string
      brightText: string
      errText: string

      light: string
      mid: string
      dark: string
      darkest: string
    
    }

    font: {
      fontSize: number
      fontWeight: number
    }
  }
}

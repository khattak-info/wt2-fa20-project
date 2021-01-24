import { createMuiTheme } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#1565c0",
		},
		secondary: grey,
		background: {
			default: "#f8f8f8",
		},
	},
})

export default theme

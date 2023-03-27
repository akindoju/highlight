import { LogLevel as LogLevelType } from '@graph/schemas'
import { Text } from '@highlight-run/ui'
import { Box } from '@highlight-run/ui'
import { COLOR_MAPPING } from '@pages/LogsPage/constants'
import React from 'react'

type Props = {
	level: LogLevelType
}

const LogLevel = ({ level }: Props) => {
	const color = COLOR_MAPPING[level]

	return (
		<Box flexShrink={0} style={{ color, width: 46 }}>
			<Text weight="bold" family="monospace">
				{level.toUpperCase()}
			</Text>
		</Box>
	)
}

export { LogLevel }

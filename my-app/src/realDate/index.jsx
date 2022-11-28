import React from 'react'
const dayjs = require('dayjs')
let localizedFormat = require('dayjs/plugin/localizedFormat')


export const RealDate = () => {
    
    dayjs.extend(localizedFormat)
    const formatData = dayjs().format('MMMM D, YYYY')
    
    return (
        <div>
            {formatData}
        </div>
    )
}
